import { subject } from '@casl/ability';

import type { TodoType, User } from '../../types';
import { getUserPermissions } from './getUserPermissions';

/**
 * Helper: returns CASL permissions for a user.
 */
function permissionsFor(user: User | null) {
  return getUserPermissions(user || undefined);
}

/**
 * Checks whether the user is allowed to toggle the "complete" status of a Todo.
 */
export function canToggleTodo({ user, todo }: { user: User | null; todo?: TodoType }) {
  const permissions = permissionsFor(user);

  // If no specific todo is provided, check if the user can update the "complete"
  // field on *any* Todo item in general.
  // can i do something in general on at-least on of those element
  if (!todo) {
    return permissions.can('update', 'Todo', 'complete');
  }

  // If a todo IS provided, check if the user is allowed to update the "complete"
  // field on this specific Todo instance.
  // can i do on something specific element
  return permissions.can(
    'update',
    subject('Todo', todo), // tells CASL: “check permissions on this specific record”
    'complete'
  );
}

/**
 * Checks whether the user is allowed to update part or all of a Todo.
 */
export function canUpdateTodo({ user, todo, data }: { user: User | null; todo?: TodoType; data?: Partial<TodoType> }) {
  const permissions = permissionsFor(user);

  // If no specific todo is provided, check if the user can generally update Todos.
  if (!todo) {
    return permissions.can('update', 'Todo');
  }

  // If no data fields are provided, simply check if user can update this todo at all.
  if (!data) {
    return permissions.can('update', subject('Todo', todo));
  }

  // If specific fields are being updated, check permission for EACH field.
  // All fields must be allowed.
  Object.keys(data).every(field => {
    return permissions.can('update', subject('Todo', todo), field);
  });
}
export function canDeleteTodo({ user, todo }: { user: User | null; todo?: TodoType }) {
  const permissions = permissionsFor(user);

  // No specific record → check general delete permission
  if (!todo) {
    return permissions.can('delete', 'Todo');
  }

  // Specific record → check delete permission on this instance
  return permissions.can('delete', subject('Todo', todo));
}

export function canReadTodo({ user, todo }: { user: User | null; todo?: TodoType }) {
  const permissions = permissionsFor(user);

  // If no specific Todo is given, check whether the user can
  // read any Todo in general.
  if (!todo) {
    return permissions.can('read', 'Todo');
  }

  // Otherwise, check permission to read this exact Todo.
  return permissions.can('read', subject('Todo', todo));
}

export function canCreateTodo({ user, todo }: { user: User | null; todo?: TodoType }) {
  const permissions = permissionsFor(user);

  // If no specific Todo instance is provided (e.g. when creating a new one),
  // check whether the user has permission to create ANY Todo.
  if (!todo) {
    return permissions.can('create', 'Todo');
  }

  // If a Todo object IS passed, check if the user can create a Todo
  // with these specific attributes (rare case, but CASL supports it).
  return permissions.can('create', subject('Todo', todo));
}
