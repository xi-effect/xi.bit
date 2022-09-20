import React, { ReactNode } from 'react';

export type InputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Input({ children }: InputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
