import type { Route } from './+types/cards';

import { Cards } from '~/components/ui';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Cards - React Components' }, { name: 'description', content: 'Cards' }];
}

const Page = () => {
  return <Cards />;
};

export default Page;
