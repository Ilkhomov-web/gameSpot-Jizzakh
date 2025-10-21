import React from 'react';
import { Box, Button, Container, Grid, List, ListItem, Typography, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useThemeContext } from '@/context/ThemeContext';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm');

  return (
    <Box sx={{ padding: '20px 0px' }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            size={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}
            sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Box component={'img'} width={{ xs: '50px', lg: '100px' }} src={'/logo.png'}></Box>
            <Typography
              sx={{
                color: mode === 'dark' ? 'white' : '#3B0270',
                fontSize: { xs: '12px', lg: '35px' },
              }}
            >
              GameSpot Jizzakh{' '}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}
            sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end' }}
          >
            <List>
              <ListItem sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }}>
                Kompyur club qo'shish
              </ListItem>
            </List>
            <Box>
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
              <Link href={'/login'}>
                <Button sx={{ color: mode === 'dark' ? 'white' : '#3B0270' }}>
                  {' '}
                  <LogoutIcon /> Login
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
