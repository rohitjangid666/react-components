import InputFieldGrows from '~/components/input-field-grows';

import type { Route } from './+types/input-field-grows';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Input Field Grows - React Components' }, { name: 'description', content: 'Input Field Grows' }];
}

const Page = () => {
  return <InputFieldGrows />;
};

export default Page;
