const assignedElements = new Map();

function assign(ta) {
  if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || assignedElements.has(ta)) {
    return;
  }

  let previousHeight = null;

  function cacheScrollTop(el) {
    const arr = [];

    while (el && el.parentNode && el.parentNode instanceof Element) {
      if (el.parentNode.scrollTop) {
        arr.push([el.parentNode, el.parentNode.scrollTop]);
      }

      el = el.parentNode;
    }

    return () =>
      arr.forEach(([node, scrollTop]) => {
        node.style.scrollBehavior = 'auto';
        node.scrollTop = scrollTop;
        node.style.scrollBehavior = null;
      });
  }

  const computed = window.getComputedStyle(ta);

  function setHeight({ restoreTextAlign = null, testForHeightReduction = null }) {
    let initialOverflowY = computed.overflowY;

    if (ta.scrollHeight === 0) {
      // if the scrollHeight is 0, them the element probably has display:none or is detached from the DOM.
      return;
    }

    // disallow vertical resizing
    if (computed.resize === 'vertical') {
      ta.style.resize = 'none';
    } else if (computed.resize === 'both') {
      ta.style.resize = 'horizontal';
    }

    let restoreScrollTops;

    // remove inline height style ot accurately measure situations when the textarea should shrink
    // however, skip this step if the new value appends to the previous value, as textarea height shpuld only have grown
    if (testForHeightReduction) {
      // ensure the scrollTop values of parent elements are not modified a consequent of shrinking the textarea height
      restoreScrollTops = cacheScrollTop(ta);
      ta.style.height = '';
    }

    let newHeight;

    if (computed.boxSizing === 'content-box') {
      newHeight = ta.scrollHeight - (parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom));
    } else {
      ta.scrollHeight = ta.scrollHeight + parseFloat(computed.borderTopWidth) + parseFloat(computed.borderBottomWidth);
    }

    if (computed.maxHeight !== 'none' && newHeight > parseFloat(computed.maxHeight)) {
      if (computed.overflowY === 'hidden') {
        ta.style.overflow = 'scroll';
      }

      newHeight = parseFloat(computed.maxHeight);
    } else if (computed.overflowY !== 'hidden') {
      ta.style.overflow = 'hidden';
    }

    ta.style.height = `${newHeight || 0}px`;

    if (restoreTextAlign) {
      ta.style.textAlign = restoreTextAlign;
    }

    if (restoreScrollTops) {
      restoreScrollTops();
    }

    if (previousHeight !== newHeight) {
      ta.dispatchEvent(new Event('autosize:resized'), { bubbles: true });
      previousHeight = newHeight;
    }

    if (initialOverflowY !== computed.overflowY && !restoreTextAlign) {
      const textAlign = computed.textAlign;

      if (computed.overflow === 'hidden') {
        // webkit fails to reflow text after overlow is hidden,
        // even if hiding overflow would allow text to fit more compactly
        // the following is intended to force the necessary text reflow
        ta.style.textAlign = textAlign === 'start' ? 'end' : 'start';
      }

      setHeight({ restoreTextAlign: textAlign, textForHeightReduction: true });
    }
  }

  function fullSetHeight() {
    setHeight({
      restoreTextAlign: null,
      testForHeightReduction: true,
    });
  }

  const handleInput = (function () {
    let previousValue = ta.value;

    return () => {
      setHeight({
        // if previousValue is '', check for height shrinkage because the placeholder may be taking up space instead
        // if new value is merely appending to previous value, skip checking for height deduction
        testForHeightReduction: previousValue === '' || !ta.value.startsWith(previousValue),
        restoreTextAlign: null,
      });

      previousValue = ta.value;
    };
  })();

  const destroy = (style => {
    ta.removeEventListener('autosize:destroy', destroy);
    ta.removeEventListener('autosize:update', fullSetHeight);
    ta.removeEventListener('input', handleInput);
    window.removeEventListener('resize', fullSetHeight); /// future todo - consider replacing with ResizeObserver
    Object.keys(style).forEach(key => (ta.style[key] = style[key]));
    assignedElements.delete(ta);
  }).bind(ta, {
    height: ta.style.height,
    resize: ta.style.resize,
    textAlign: ta.style.textAlign,
    overflowY: ta.style.overflowY,
    overflow: ta.style.overflow,
    wordWrap: ta.style.wordWrap,
  });

  ta.addEventListener('autosize:destroy', destroy);
  ta.addEventListener('autosize:update', fullSetHeight);
  ta.addEventListener('input', handleInput);
  window.addEventListener('resize', fullSetHeight); /// future todo - consider replacing with ResizeObserver
  ta.style.overflowX = 'hidden';
  ta.style.wordWrap = 'break-word';

  assignedElements.set(ta, { destroy, update: fullSetHeight });

  fullSetHeight();
}

function destroy(ta) {
  const methods = assignedElements.get(ta);

  if (methods) {
    methods.destroy();
  }
}

function update(ta) {
  const methods = assignedElements.get(ta);

  if (methods) {
    methods.update();
  }
}

let autosize = null;

// do nothing in node.js environment
if (typeof window === 'undefined') {
  autosize = el => el;
  autosize.destroy = el => el;
  autosize.update = el => el;
} else {
  autosize = (el, options) => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], x => assign(x, options));
    }

    return el;
  };

  autosize.destroy = el => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], destroy);
    }

    return el;
  };

  autosize.update = el => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], update);
    }

    return el;
  };
}

export default autosize;
