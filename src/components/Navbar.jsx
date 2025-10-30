'use client';
import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  useTheme,
  Avatar,
  Popover,
  IconButton,
  Drawer,
  Divider,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logout } = useAuth();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const menuLinks = (
    <List>
      <ListItem sx={{ color: mode === 'dark' ? 'white' : '#3B0270', fontSize: 16 }}>
        <Link
          href={'https://t.me/Elka_0624'}
          style={{ textDecoration: 'none', color: 'currentcolor' }}
        >
          {' '}
          Kompyuter club qo'shish
        </Link>
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ padding: '20px 0px' }}>
      <Container maxWidth="lg">
        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid item sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Box component={'img'} width={{ xs: '50px', lg: '100px' }} src={'/logo.png'} />
            <Typography
              sx={{
                color: mode === 'dark' ? 'white' : '#3B0270',
                fontSize: { xs: '14px', lg: '35px' },
                fontWeight: 600,
              }}
            >
              GameSpot Jizzakh
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: '15px',
            }}
          >
            {menuLinks}

            <Button>
              <GTranslateIcon sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }} />
            </Button>

            <Button onClick={toggleTheme}>
              {mode === 'dark' ? (
                <LightModeIcon sx={{ color: 'white' }} />
              ) : (
                <DarkModeIcon sx={{ color: '#3B0270' }} />
              )}
            </Button>

            {user ? (
              <Avatar
                aria-describedby={id}
                onClick={handleClick}
                sx={{ bgcolor: '#3B0270', cursor: 'pointer' }}
              >
                {user.email ? user.email[0].toUpperCase() : 'U'}
              </Avatar>
            ) : (
              <Link href={'/login'}>
                <Button
                  sx={{ color: mode === 'dark' ? 'white' : '#3B0270', textTransform: 'none' }}
                >
                  <LogoutIcon sx={{ mr: 1 }} /> Login
                </Button>
              </Link>
            )}
          </Grid>
          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: mode === 'dark' ? 'white' : '#3B0270',
            }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Container>
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography sx={{ fontWeight: 600 }}>Menu</Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          {menuLinks}
          <Divider sx={{ my: 1 }} />

          <Button>
            <GTranslateIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: mode === 'dark' ? 'white' : '#3B0270',
              }}
            />
          </Button>

          <Button onClick={toggleTheme}>
            {mode === 'dark' ? (
              <LightModeIcon
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: mode === 'dark' ? 'white' : '#3B0270',
                }}
              />
            ) : (
              <DarkModeIcon
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: mode === 'dark' ? 'white' : '#3B0270',
                }}
              />
            )}
          </Button>

          {user ? (
            <Button onClick={logout} sx={{ color: 'red', mt: 2 }}>
              <LogoutIcon sx={{ mr: 1 }} /> Logout
            </Button>
          ) : (
            <Link href={'/login'}>
              <Button sx={{ mt: 2, textTransform: 'none' }}>
                <LogoutIcon sx={{ mr: 1 }} /> Login
              </Button>
            </Link>
          )}
        </Box>
      </Drawer>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{ sx: { width: 200, p: 2, borderRadius: 2 } }}
      >
        <Typography sx={{ fontSize: 14, color: 'gray', mb: 1 }}>Settings</Typography>
        <Button sx={{ textTransform: 'none', color: mode === 'dark' ? 'white' : '#3B0270' }}>
          Setting Profile
        </Button>
        <Typography sx={{ fontSize: 14, color: 'red', mt: 2 }}>Danger Zone</Typography>
        <Button onClick={logout} sx={{ color: 'red', textTransform: 'none' }}>
          <LogoutIcon sx={{ mr: 1 }} /> Logout
        </Button>
      </Popover>
    </Box>
  );
};

export default Navbar;
