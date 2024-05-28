import { describe, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { AppMenu } from '.';
import { ThemeContext } from '../../modules/home/contexts/theme-context';
import { ThemeProvider, createTheme } from '@mui/material';

describe('AppMenu', () => {
  test('should render the AppMenu component', () => {
    const { baseElement } = render(<AppMenu />);

    expect(baseElement).toBeDefined();
  });

  test('should change theme using button', () => {
    let mode: 'light' | 'dark' = 'light';

    const theme = createTheme({
      palette: {
        mode,
      },
    });

    const { getAllByRole } = render(
      <ThemeContext.Provider
        value={{
          toggleColorMode: () => {
            mode = mode === 'light' ? 'dark' : 'light';
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <AppMenu />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const button = getAllByRole('button')[0];

    expect(mode).toContain('light');

    fireEvent.click(button);

    expect(mode).toContain('dark');
  });
});
