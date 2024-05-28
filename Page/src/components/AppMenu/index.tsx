import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Button, useTheme } from '@mui/material';

import { ThemeContext } from '../../modules/home/contexts/theme-context';

import './style.css';

export const AppMenu = () => {
  const colorMode = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <header id="appmenu">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'left',
                color: 'text.light',
                p: 3,
              }}
            >
              <Button
                sx={{ ml: 1 }}
                id="theme-button"
                data-click-increment="themeChangeCount"
                color="inherit"
                role="button"
                aria-label="Alterar o tema"
                onClick={colorMode.toggleColorMode}
              >
                modo {theme.palette.mode === 'dark' ? 'escuro' : 'claro'}
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </Button>
            </Box>
            <IconButton size="large" edge="start" color="inherit" role="button" aria-label="Menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
