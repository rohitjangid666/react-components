import { CASLAbility } from '~/components/casl';
import type { Route } from './+types/cards';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CASL - CASL Ability' }, { name: 'description', content: 'Usage of @casl/ability' }];
}

const Page = () => {
  return <CASLAbility />;
};

export default Page;
