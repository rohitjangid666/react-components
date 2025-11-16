import { AbilityBuilder, createMongoAbility, type MongoAbility } from '@casl/ability';

import type { TodoType, User } from '../../types';

// The "subject" type describes what parts of the Todo or User CASL is allowed to check.
type TodoSubject = Pick<TodoType, 'user' | 'public'> | 'Todo';
type UserSubject = Pick<User, 'role'> | 'User';

// A permission is an action (create/read/update/delete) + the subject it applies to.
type Permission = ['create' | 'read' | 'update' | 'delete', TodoSubject] | ['read', UserSubject];

export function getUserPermissions(user: User | undefined) {
  // AbilityBuilder lets us add rules (permissions) in a readable way.
  // "allow" is used to define allowed actions.
  const { build, can: allow } = new AbilityBuilder<MongoAbility<Permission>>(createMongoAbility);

  /**
   * --- PUBLIC PERMISSIONS (available to everyone, even not logged in) ---
   */

  // Anyone can read Todos that are marked as public.
  allow('read', 'Todo', { public: true });

  /**
   * --- LOGGED-IN USER PERMISSIONS ---
   */
  if (!!user) {
    // A user can read their own Todos.
    allow('read', 'Todo', { user: user.id });

    // A user can update their own Todos.
    allow('update', 'Todo', { user: user.id });

    // A user can create Todos for themselves.
    allow('create', 'Todo', { user: user.id });

    // A user can delete their own Todo ONLY if it's not public.
    allow('delete', 'Todo', { user: user.id, public: false });

    /**
     * --- ADMIN PERMISSIONS ---
     */
    if (user.role === 'admin') {
      // Admin can read any Todo (no conditions).
      allow('read', 'Todo');

      // Admin can read users who are regular users (role: 'user').
      allow('read', 'User', { role: 'user' });

      // Admin can update the "complete" field of any public Todo.
      allow('update', 'Todo', ['complete'], { public: true });
    }
  }

  // Finalize and return the ability instance with all rules applied.
  return build();
}

// import { AbilityBuilder, createMongoAbility, type MongoAbility } from '@casl/ability';

// import type { TodoType, User } from '../../types';

// // Define what subjects our permissions can apply to.
// // A TodoSubject can either be a Todo object with just `user` and `public` fields, or the string 'Todo'.
// type TodoSubject = Pick<TodoType, 'user' | 'public'> | 'Todo';
// type UserSubject = Pick<User, 'role'> | 'User';

// // Define the type for permissions.
// // Each permission is a tuple: [action, subject].
// // Actions can be 'create', 'read', 'update', or 'delete' on a TodoSubject,
// // or 'read' on a User object.
// type Permission = ['create' | 'read' | 'update' | 'delete', TodoSubject] | ['read', UserSubject];

// // Function to generate a CASL ability object based on the provided user
// export function getUserPermissions(user: User | undefined) {
//   // Create a new AbilityBuilder instance to define permissions
//   const { build, can: allow } = new AbilityBuilder<MongoAbility<Permission>>(createMongoAbility);

//   // Allow anyone (even unauthenticated users) to read public Todos
//   allow('read', 'Todo', { public: true });

//   // If a user is logged in
//   if (!!user) {
//     // Allow the user to read their own Todos
//     allow('read', 'Todo', { user: user.id });
//     // Allow the user to update their own Todos
//     allow('update', 'Todo', { user: user.id });
//     // Allow the user to create their own Todos
//     allow('create', 'Todo', { user: user.id });
//     // Allow the user to delete their own Todos
//     allow('delete', 'Todo', { user: user.id, public: false });

//     // If the user is an admin
//     if (user.role === 'admin') {
//       // Allow admin to read all Todos, regardless of owner or public status
//       allow('read', 'Todo');
//       allow('read', 'User', { role: 'user' });
//       // Allow to update only the 'complete' field of public Todos
//       /**
//        * Break down of allow method
//        * 'update' → action allowed.
//        * 'Todo' → subject of the action.
//        * ['complete'] → optional list of fields that can be updated (restricts to the complete field).
//        * { public: true } → condition: only Todos that are public.
//        */
//       allow('update', 'Todo', ['complete'], { public: true });
//     }
//   }

//   // Build and return the ability object
//   return build();
// }
