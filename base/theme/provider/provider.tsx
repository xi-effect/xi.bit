import React, { ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme,
} from '@mui/material';

export type ThemeProviderProps = {
  /**
   * user theme mode. light or dark
   */
  mode?: 'light' | 'dark';
  children: ReactNode;
};

export function ThemeProvider({
  mode = 'light',
  children,
}: ThemeProviderProps) {
  const theme: Theme = React.useMemo(
    () => createTheme(getScheme(mode)),
    [mode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
