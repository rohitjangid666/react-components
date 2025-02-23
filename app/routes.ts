import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('contact-us', 'routes/contact.tsx'),
  layout('layouts/main.tsx', [
    route('inverted-border-radius', 'routes/inverted-border-radius.tsx'),
    route('corner-only-borders', 'routes/corner-only-borders.tsx'),
    route('cards', 'routes/cards.tsx'),
  ]),
] satisfies RouteConfig;
