import { InvertedBorderRadius } from '~/components/ui';

import type { Route } from './+types/inverted-border-radius';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Inverted Border Radius - React Compoents' },
    { name: 'description', content: 'Inverted Border Radius' },
  ];
}

const Page = () => {
  return <InvertedBorderRadius />;
};

export default Page;
