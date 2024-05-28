import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import { AppMenu } from '../../../components/AppMenu';

import { AboutMe } from '../../aboutme/page';
import { Project } from '../../projects/page';
import { Posts } from '../../posts/page';
import { AppFooter } from '../../../components/AppFooter';
import { ThemeContext } from '../contexts/theme-context';
import { useMemo, useState } from 'react';

export const Home = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <main>
      <ThemeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <AppMenu />

          <AboutMe />
          <Project />
          <Posts />

          <AppFooter />
        </ThemeProvider>
      </ThemeContext.Provider>
    </main>
  );
};
