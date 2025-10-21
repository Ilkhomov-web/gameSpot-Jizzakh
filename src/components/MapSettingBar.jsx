import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import MapIcon from '@mui/icons-material/Map';
import TuneIcon from '@mui/icons-material/Tune';
import { useThemeContext } from '@/context/ThemeContext';

const MapSettingBar = () => {
  const { mode } = useThemeContext();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#3B0270',
        padding: '10px 20px',
        borderRadius: '12px',
        margin: '20px 0px',
        boxShadow: '5px 10px 10px rgba(59,2,111,0.5)',
      }}
    >
      <Typography
        sx={{ fontSize: { xs: '12px', lg: '20px' }, color: mode === 'dark' ? 'white' : 'white' }}
      >
        Xaritani sozlash
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button>
          <MapIcon sx={{ color: mode === 'dark' ? 'white' : 'white' }} />
        </Button>
        <Button>
          <TuneIcon sx={{ color: mode === 'dark' ? 'white' : 'white' }} />
        </Button>
      </Box>
    </Box>
  );
};

export default MapSettingBar;
