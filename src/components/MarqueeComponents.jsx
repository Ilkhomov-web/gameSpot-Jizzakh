import { useThemeContext } from '@/context/ThemeContext';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponents = () => {
  const { mode } = useThemeContext();
  return (
    <Marquee autoFill style={{ margin: '50px 0px ' }}>
      <Typography
        sx={{ color: mode === 'dark' ? 'white' : '#3B0270', fontSize: '30px', margin: '0px 20px' }}
      >
        {' '}
        Flush-A Game Club
      </Typography>
    </Marquee>
  );
};

export default MarqueeComponents;
