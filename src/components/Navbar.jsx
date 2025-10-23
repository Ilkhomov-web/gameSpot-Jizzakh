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
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ padding: '20px 0px' }}>
      <Container maxWidth="lg">
        <Grid container sx={{ justifyContent: 'space-between' }}>
          {/* Logo va nom */}
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Box component={'img'} width={{ xs: '50px', lg: '100px' }} src={'/logo.png'} />
            <Typography
              sx={{
                color: mode === 'dark' ? 'white' : '#3B0270',
                fontSize: { xs: '12px', lg: '35px' },
              }}
            >
              GameSpot Jizzakh
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              justifyContent: 'flex-end',
            }}
          >
            <List>
              <ListItem sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }}>
                Kompyuter club qo'shish
              </ListItem>
            </List>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button>
                <GTranslateIcon sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }} />
              </Button>

              <Button onClick={toggleTheme}>
                {mode === 'dark' ? (
                  <LightModeIcon sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }} />
                ) : (
                  <DarkModeIcon sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }} />
                )}
              </Button>

              {user ? (
                <>
                  <Box sx={{ display: 'flex' }}>
                    <Avatar
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                      sx={{
                        bgcolor: '#3B0270',
                        color: 'white',
                        width: 32,
                        height: 32,
                        fontSize: 14,
                        mr: 1,
                        cursor: 'pointer',
                      }}
                    >
                      {user.email ? user.email[0].toUpperCase() : 'U'}
                    </Avatar>
                  </Box>
                </>
              ) : (
                <Link href={'/login'}>
                  <Button
                    sx={{
                      color: mode === 'dark' ? 'white' : '#3B0270',
                      textTransform: 'none',
                    }}
                  >
                    <LogoutIcon sx={{ mr: 1 }} /> Login
                  </Button>
                </Link>
              )}
            </Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  width: 200,
                  p: 2,
                  borderRadius: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'gray',
                  padding: '5px 0px',
                }}
              >
                Settings
              </Typography>
              <Link href={'#'}>
                <Button sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }}>
                  Setting Profile
                </Button>
              </Link>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'red',
                  padding: '5px 0px',
                }}
              >
                Danger Zone
              </Typography>
              <Button
                onClick={logout}
                sx={{
                  color: mode === 'dark' ? 'red' : 'red',
                  textTransform: 'none',
                }}
              >
                <LogoutIcon sx={{ mr: 1 }} /> Logout
              </Button>
            </Popover>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
