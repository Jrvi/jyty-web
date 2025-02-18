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
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { CssBaseline } from '@mui/material'
import PropTypes from 'prop-types'
//import TelegramIcon from '@mui/icons-material/Telegram';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import InstagramIcon from '@mui/icons-material/Instagram';

const traditionalTheme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Tummansininen
    },
    secondary: {
      main: '#FFFFFF', // Valkoinen
    },
    error: {
      main: '#D72638', // Punainen
    },
    grey: {
      main: '#A6A6A6', // Harmaa
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif'
  },
})

const modernTheme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Musta
    },
    secondary: {
      main: '#FFFFFF', // Valkoinen
    },
    error: {
      main: '#FF0000', // Punainen
    },
    grey: {
      main: '#808080', // Harmaa
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
})

const partyTheme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Pinkki
    },
    secondary: {
      main: '#FFD700', // Kulta
    },
    error: {
      main: '#FF4500', // Oranssi
    },
    grey: {
      main: '#D3D3D3', // Vaaleanharmaa
    },
  },
  typography: {
    fontFamily: 'Comic Sans MS, sans-serif'
  },
})

const engineerTheme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Teal
    },
    secondary: {
      main: '#FFD700', // Kulta
    },
    error: {
      main: '#FF0000', // Punainen
    },
    grey: {
      main: '#A9A9A9', // Tummaharmaa
    },
  },
  typography: {
    fontFamily: 'Courier New, monospace'
  },
})

const naturalTheme = createTheme({
  palette: {
    primary: {
      main: '#228B22', // Metsänvihreä
    },
    secondary: {
      main: '#FFFFFF', // Valkoinen
    },
    error: {
      main: '#8B0000', // Tumma punainen
    },
    grey: {
      main: '#808080', // Harmaa
    },
  },
  typography: {
    fontFamily: 'Georgia, serif'
  },
})

const NavBar = ({ onThemeChange }) => {
  const [anchorElYhdistys, setAnchorElYhdistys] = useState(null)
  const [anchorElOhjesaannot, setAnchorElOhjesaannot] = useState(null)
  const [anchorElTheme, setAnchorElTheme] = useState(null)

  const handleClickYhdistys = (event) => {
    setAnchorElYhdistys(event.currentTarget)
    setAnchorElOhjesaannot(null)
    setAnchorElTheme(null)
  }

  const handleClickOhjesaannot = (event) => {
    setAnchorElOhjesaannot(event.currentTarget)
    setAnchorElYhdistys(null)
    setAnchorElTheme(null)
  }

  const handleClickTheme = (event) => {
    setAnchorElTheme(event.currentTarget)
    setAnchorElYhdistys(null)
    setAnchorElOhjesaannot(null)
  }

  const handleClose = () => {
    setAnchorElYhdistys(null)
    setAnchorElOhjesaannot(null)
    setAnchorElTheme(null)
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
        <Button color="inherit" onClick={handleClickTheme}>Teemat</Button>
        <Menu
          anchorEl={anchorElTheme}
          open={Boolean(anchorElTheme)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => onThemeChange('traditional')}>Perinteinen teekkarimeininki</MenuItem>
          <MenuItem onClick={() => onThemeChange('modern')}>Modern Mode</MenuItem>
          <MenuItem onClick={() => onThemeChange('party')}>Party Mode</MenuItem>
          <MenuItem onClick={() => onThemeChange('engineer')}>Engineer Mode</MenuItem>
          <MenuItem onClick={() => onThemeChange('natural')}>Natural Mode</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
}

const Footer = () => {
  const theme = useTheme()
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main }}>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1">
            Jyväskylän Teekkariyhdistys © {new Date().getFullYear()}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default function RootLayout({children}) {
  const [theme, setTheme] = useState('traditional')

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
  }

  const getTheme = (theme) => {
    switch (theme) {
      case 'traditional':
        return traditionalTheme
      case 'modern':
        return modernTheme
      case 'party':
        return partyTheme
      case 'engineer':
        return engineerTheme
      case 'natural':
        return naturalTheme
      default:
        return traditionalTheme
    }
  }

  return (
    <html lang="fi" style={{ height: '100%' }}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <ThemeProvider theme={getTheme(theme)}>
          <CssBaseline />
          <NavBar onThemeChange={handleThemeChange} currentTheme={theme} />
          <Container component="main" sx={{ flex: 1 }}>
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}