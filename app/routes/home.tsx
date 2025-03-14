import { Welcome } from '~/components/welcome';

import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'React Components' }, { name: 'description', content: 'Welcome to React Components!' }];
}

export default function Home() {
  return <Welcome />;
}
