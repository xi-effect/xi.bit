import React, { ReactNode } from 'react';

export type AddProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Add({ children }: AddProps) {
  return (
    <div>
      {children}
    </div>
  );
}
