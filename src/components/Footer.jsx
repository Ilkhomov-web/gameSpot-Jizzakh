import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        background: '#3B0270',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ color: 'white' }}>Footer</Typography>
    </Box>
  );
};

export default Footer;
