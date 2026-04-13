import { useState } from 'react';
import { Box, Container, AppBar, Toolbar, IconButton, Drawer, Button, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../contexts/ThemeContext';


interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
];

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            sx={{
              fontSize: '24px',
              fontWeight: 600,
              color: 'var(--accent)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.3s',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            Portfolio
          </Box>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                sx={{
                  color: 'var(--text)',
                  textTransform: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    color: 'var(--accent)',
                  },
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </Button>
            ))}

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: 'var(--text)',
                '&:hover': {
                  backgroundColor: 'var(--accent-bg)',
                },
              }}
              size="small"
            >
              {theme === 'light' ? (
                <DarkModeIcon fontSize="small" />
              ) : (
                <LightModeIcon fontSize="small" />
              )}
            </IconButton>
          </Stack>

          {/* Mobile Menu Toggle + Theme */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: 'var(--text)',
                '&:hover': {
                  backgroundColor: 'var(--accent-bg)',
                },
              }}
              size="small"
            >
              {theme === 'light' ? (
                <DarkModeIcon fontSize="small" />
              ) : (
                <LightModeIcon fontSize="small" />
              )}
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ color: 'var(--text)' }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'var(--bg)',
              borderLeft: '1px solid var(--border)',
              width: 250,
            },
          },
        }}
      >
        <Box
          sx={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ alignSelf: 'flex-end', color: 'var(--text)' }}
          >
            <CloseIcon />
          </IconButton>
          {navLinks.map((link) => (
            <Button
              key={link.label}
              fullWidth
              onClick={() => handleNavClick(link.href)}
              sx={{
                color: 'var(--text)',
                textTransform: 'none',
                fontSize: '16px',
                justifyContent: 'flex-start',
                '&:hover': {
                  backgroundColor: 'var(--accent-bg)',
                  color: 'var(--accent)',
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
