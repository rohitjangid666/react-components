import { CornerOnlyBorders } from '~/components/ui';

import type { Route } from './+types/corner-only-borders';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Corner Only Borders - React Compoents' }, { name: 'description', content: 'Corner Only Borders' }];
}

const Page = () => {
  return <CornerOnlyBorders />;
};

export default Page;
