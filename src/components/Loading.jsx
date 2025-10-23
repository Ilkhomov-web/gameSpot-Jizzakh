import { Box } from '@mui/material';
import React from 'react';
import { TrophySpin } from 'react-loading-indicators';

const Loading = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TrophySpin color={['#39038b', '#4e04bd', '#6205ef', '#7e2cfb']} />
    </Box>
  );
};

export default Loading;
