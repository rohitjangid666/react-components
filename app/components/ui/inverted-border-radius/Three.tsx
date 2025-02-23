import clsx from 'clsx';

import styles from './styles/three.module.css';

const Figure: React.FC<{
  style?: React.CSSProperties;
  className?: string;
  src: string;
  alt: string;
  caption: string;
}> = ({ src, alt, caption, className, style }) => {
  return (
    <figure
      className={clsx(
        styles['figure'],
        'w-[280px] grid m-0 cursor-pointer font-bold text-4xl leading-[1.5] font-mono',
        className
      )}
      style={style}
    >
      <img className='aspect-square h-full w-full object-cover object-center' src={src} alt={alt} />
      <figcaption className='box-border overflow-hidden text-center bg-border text-white'>{caption}</figcaption>
    </figure>
  );
};

{
  /* <figure class="alt">
  <img src="https://picsum.photos/id/593/300/300" alt="Tiger" >
  <figcaption>Tiger</figcaption>
</figure>
<figure>
  <img src="https://picsum.photos/id/659/300/300" alt="Wolf" >
  <figcaption>Wolf</figcaption>
</figure> */
}

const Three = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <Figure
        src='https://images.unsplash.com/photo-1600710967322-a4562604bb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw0fHxrb2VuaWdzZWdnfGVufDB8fHx8MTc0MDI5NTIwNHww&ixlib=rb-4.0.3&q=80&w=1080'
        alt='Koenigsegg'
        caption='Koenigsegg'
        className={styles['alt']}
      />
      <Figure
        src='https://images.unsplash.com/photo-1600711005890-8aaa39913924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxrb2VuaWdzZWdnfGVufDB8fHx8MTc0MDI5NTIwNHww&ixlib=rb-4.0.3&q=80&w=1080'
        alt='Koenigsegg'
        caption='Koenigsegg'
      />
    </div>
  );
};

export default Three;
