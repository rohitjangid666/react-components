import { Children, isValidElement, type ReactNode } from 'react';

type SwitchProps<T> = {
  value: T;
  match?: 'first' | 'all' | ((matches: ReactNode[]) => ReactNode);
  children: ReactNode;
};

type CaseProps<T> = {
  when: T | ((val: T) => boolean);
  children: ReactNode;
};

type DefaultProps = {
  children: ReactNode;
};

export function Switch<T>({ children, match = 'all', value }: SwitchProps<T>) {
  const passedCases: ReactNode[] = [];
  let defaultCase: ReactNode | null = null;

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    if (child.type === Default) {
      defaultCase = child;
      return;
    }

    if (child.type === Case) {
      const { when } = child.props as CaseProps<T>;

      const isMatch = typeof when === 'function' ? (when as (v: T) => boolean)(value) : when === value;

      if (isMatch) passedCases.push(child);
    }
  });

  if (passedCases.length === 0) return defaultCase;

  if (typeof match === 'function') return match(passedCases);
  if (match === 'first') return passedCases[0];
  if (match === 'all') return <>{passedCases}</>;
  return null;
}

// export function Case<T>({ children }: CaseProps<T>) {
//   return children;
// }

export const Case = <T,>({ children }: CaseProps<T>) => (
  <>
    {children}
    <br />
  </>
);

export const Default = ({ children }: DefaultProps) => (
  <>
    {children}
    <br />
  </>
);
