'use client'

import './globals.css'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
  const [anchorElYhdistys, setAnchorElYhdistys] = useState(null)
  const [anchorElOhjesaannot, setAnchorElOhjesaannot] = useState(null)

  const handleClickYhdistys = (event) => {
    setAnchorElYhdistys(event.currentTarget);
    setAnchorElOhjesaannot(null)
  }

  const handleClickOhjesaannot = (event) => {
    setAnchorElOhjesaannot(event.currentTarget)
    setAnchorElYhdistys(null)
  }

  const handleClose = () => {
    setAnchorElYhdistys(null)
    setAnchorElOhjesaannot(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link href='/' style={{ textDecoration: 'none', color: 'inherit'}}>
            Jyväskylän Teekkariyhdistys
          </Link>
        </Typography>
        <Button color="inherit" onClick={handleClickYhdistys}>Yhdistys</Button>
        <Menu 
          anchorEl={anchorElYhdistys}
          open={Boolean(anchorElYhdistys)}
          onClose={handleClose}
        >
          <MenuItem component={Link} href='/hallitus'>Hallitus</MenuItem>
          <MenuItem component={Link} href='/saannot'>Säännöt</MenuItem>
          <MenuItem component={Link} href='/jasenyys'>Jäsenyys</MenuItem>
        </Menu>
        <Button color="inherit" onClick={handleClickOhjesaannot}>Ohjesäännöt</Button>
        <Menu
          anchorEl={anchorElOhjesaannot}
          open={Boolean(anchorElOhjesaannot)}
          onClose={handleClose}
        >
          <MenuItem component={Link} href='/lakkisaannot'>Lakkisäännöt</MenuItem>
          <MenuItem component={Link} href='/ansiomerkkisaannot'>Ansiomerkkisäännöt</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} href='/killat'>Killat</Button>
      </Toolbar>
    </AppBar>
  )
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