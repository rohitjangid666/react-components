import type { TodoType } from '~/components/casl/types';

const todos: TodoType[] = [
  {
    id: '3189365473890219874',
    complete: true,
    title: 'Public Todo & Admin User',
    public: true,
    user: '31319383912378120312',
  },
  {
    id: '4739082748910371',
    complete: true,
    title: 'Private Todo & Admin User',
    public: false,
    user: '31319383912378120312',
  },
  {
    id: '98765432898765432',
    complete: false,
    title: 'Private Todo & Normal User',
    public: false,
    user: '6789813237812312',
  },
  {
    id: '18293018y913i1232',
    complete: false,
    title: 'Public Todo & Normal User',
    public: true,
    user: '6789813237812312',
  },
];

export default todos;
