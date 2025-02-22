import ContactUs from '~/components/contact';

import type { Route } from './+types/contact';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Contact Us - React Compoents' }, { name: 'description', content: 'Contact Us' }];
}

export default function Contact() {
  return <ContactUs />;
}
