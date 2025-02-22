import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [index('routes/home.tsx'), route('contact-us', 'routes/contact.tsx')] satisfies RouteConfig;
