import React, { ReactNode } from 'react';
import { Button as MButton, ButtonProps as MButtonProps } from '@mui/material';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
} & MButtonProps;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MButton
      sx={{
        textTransform: 'capitalize',
        height: '64px',
        width: '136px',
        borderRadius: '8px',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: '22px',
        backgroundColor: '#445AFF',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#697BFF',
          boxShadow: 'none',
        },
      }}
      {...props}
    >
      {children}
    </MButton>
  );
}
