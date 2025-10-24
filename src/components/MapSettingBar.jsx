import { Box, Button, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import MapIcon from '@mui/icons-material/Map';
import TuneIcon from '@mui/icons-material/Tune';
import { useThemeContext } from '@/context/ThemeContext';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useMapOrList } from '@/context/MapOrListContext';

const MapSettingBar = () => {
  const { mode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const { mapOrList, toggleMapOrList } = useMapOrList();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
        <Button aria-describedby={id} onClick={handleClick}>
          {mapOrList === 'map' ? (
            <MapIcon sx={{ color: mode === 'dark' ? 'white' : 'white' }} />
          ) : (
            <FormatListBulletedIcon sx={{ color: mode === 'dark' ? 'white' : 'white' }} />
          )}
        </Button>
        <Button>
          <TuneIcon sx={{ color: mode === 'dark' ? 'white' : 'white' }} />
        </Button>
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
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Button
            sx={{
              color: '#3B0270',

              '&:hover': {
                background:
                  'linear-gradient(91deg,rgba(99, 34, 161, 1) 0%, rgba(59, 2, 112, 1) 50%, rgba(114, 64, 161, 1) 100%)',
                boxShadow: '0 0 20px rgba(74,144,255,0.2), 0 0 40px rgba(111,66,193,0.2)',
                transform: 'translateY(-5px) scale(1.01)',
                transition: 'all 0.5s ease',
                color: 'white',
              },
            }}
            onClick={() => toggleMapOrList('map')}
          >
            <FmdGoodIcon />
          </Button>
          <Button
            sx={{
              color: '#3B0270',
              '&:hover': {
                background:
                  'linear-gradient(91deg,rgba(99, 34, 161, 1) 0%, rgba(59, 2, 112, 1) 50%, rgba(114, 64, 161, 1) 100%)',
                boxShadow: '0 0 20px rgba(74,144,255,0.2), 0 0 40px rgba(111,66,193,0.2)',
                transform: 'translateY(-5px) scale(1.01)',
                transition: 'all 0.5s ease',
                color: 'white',
              },
            }}
            onClick={() => toggleMapOrList('list')}
          >
            <FormatListBulletedIcon />
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default MapSettingBar;
