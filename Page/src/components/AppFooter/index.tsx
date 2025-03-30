import { useTheme } from '@mui/material';
import './style.css';

export const AppFooter = () => {
  const theme = useTheme();

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: theme.palette.primary.contrastText,
      }}
    >
      <p style={{ color: theme.palette.text.primary }}>Pagina de extração</p>
    </footer>
  );
};
