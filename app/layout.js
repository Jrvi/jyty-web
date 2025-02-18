"use client"

import "./globals.css";
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // pääväri
    },
    secondary: {
      main: '#fff', // toinen väri
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Jyväskylän Teekkariyhdistys
        </Typography>
        <Button color="inherit" component={Link} href='/'>Etusivu</Button>
        <Button color="inherit" component={Link} href='/hallitus'>Hallitus</Button>
        <Button color="inherit" component={Link} href='/saannot'>Säännöt</Button>
        <Button color="inherit" onClick={handleClick}>Ohjesäännöt</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} href='/lakkisaannot'>Lakkisäännöt</MenuItem>
          <MenuItem component={Link} href='/ansiomerkkisaannot'>Ansiomerkkisäännöt</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} href='/jasenyys'>Jäsenyys</Button>
        <Button color="inherit" component={Link} href='/killat'>Killat</Button>
      </Toolbar>
    </AppBar>
  );
}

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main }}>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1">
            Jyväskylän Teekkariyhdistys © {new Date().getFullYear()}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="inherit" component="a" href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default function RootLayout({children}) {
    return (
      <html lang="fi" style={{ height: '100%' }}>
        <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
          <ThemeProvider theme={theme}>
            <NavBar />
            <Container component="main" sx={{ flex: 1 }}>
              {children}
            </Container>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    )
}