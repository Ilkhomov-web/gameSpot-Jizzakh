import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { Telegram, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a0a0a',
        color: '#ccc',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Gradient line */}
        <Box
          sx={{
            height: '4px',
            width: '100%',
            background: 'linear-gradient(to right, #2196f3, #9c27b0, #e91e63)',
            borderRadius: 2,
            mb: 3,
          }}
        />

        {/* Top content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: 1,
            }}
          >
            🎮 GameSpot Jizzakh
          </Typography>

          <Box>
            <IconButton
              href="https://t.me/Elka_0624"
              target="_blank"
              sx={{ color: '#ccc', '&:hover': { color: '#29b6f6' } }}
            >
              <Telegram />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/elyor.ilhomovv/"
              target="_blank"
              sx={{ color: '#ccc', '&:hover': { color: '#f06292' } }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://github.com/yourrepo"
              target="_blank"
              sx={{ color: '#ccc', '&:hover': { color: '#9e9e9e' } }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2, borderColor: '#333' }} />

        {/* Bottom text */}
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: '#888',
          }}
        >
          © {new Date().getFullYear()}{' '}
          <Typography component="span" sx={{ color: '#fff', fontWeight: 600 }}>
            GameSpot
          </Typography>
          . All rights reserved.
        </Typography>
        <Typography
          variant="caption"
          align="center"
          display="block"
          sx={{
            mt: 0.5,
            color: '#777',
          }}
        >
          Developed by <span style={{ color: '#b388ff' }}>Elyor</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
