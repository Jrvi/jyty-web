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

export default function RootLayout({children}) {
    return (
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <NavBar />
            <Container>
              {children}
            </Container>
          </ThemeProvider>
        </body>
      </html>
    )
}