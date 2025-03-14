import CSSAnchor from '~/components/css-anchor';

import type { Route } from './+types/css-anchor';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CSS Anchor - React Components' }, { name: 'description', content: 'CSS Anchor' }];
}

const Page = () => {
  return <CSSAnchor />;
};

export default Page;
