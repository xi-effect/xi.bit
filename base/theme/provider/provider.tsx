import React, { ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme,
  ThemeOptions,
} from '@mui/material';

import { getScheme } from '@xieffect/base.theme.scheme';

export type ThemeProviderProps = {
  /**
   * user theme mode. light or dark
   */
  mode?: string;
  children: ReactNode;
};

export function ThemeProvider({
  mode = 'light',
  children,
}: ThemeProviderProps) {
  const optionsTheme = getScheme(mode) as ThemeOptions;

  const theme: Theme = React.useMemo(() => createTheme(optionsTheme), [mode]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
