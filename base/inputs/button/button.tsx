import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
} & MuiButtonProps;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MuiButton
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
    </MuiButton>
  );
}
