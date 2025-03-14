import ReactVirtuoso from '~/components/virtual-list/ReactVirtuoso';

import type { Route } from './+types/react-virtuoso';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'React Virtuoso - React Components' }, { name: 'description', content: 'React Virtuoso' }];
}

const Page = () => {
  return <ReactVirtuoso />;
};

export default Page;
