'use client';

import { Box, Button, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import MapIcon from '@mui/icons-material/Map';
import TuneIcon from '@mui/icons-material/Tune';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useThemeContext } from '@/context/ThemeContext';
import { useMapOrList } from '@/context/MapOrListContext';

const MapSettingBar = ({ setFilterType }) => {
  const { mode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const { mapOrList, toggleMapOrList } = useMapOrList();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? 'map-settings-popover' : undefined;

  const handleSelect = (type) => {
    toggleMapOrList(type);
    handleClose();
  };

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
        boxShadow: '5px 10px 10px rgba(59,2,112,0.4)',
      }}
    >
      <Typography sx={{ fontSize: { xs: '12px', lg: '20px' }, color: 'white', fontWeight: 600 }}>
        Xaritani sozlash
      </Typography>

      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button aria-describedby={id} onClick={handleClick}>
          {mapOrList === 'map' ? (
            <MapIcon sx={{ color: 'white' }} />
          ) : (
            <FormatListBulletedIcon sx={{ color: 'white' }} />
          )}
        </Button>

        {/* <Button onClick={() => setFilterType?.('filter')}>
          <TuneIcon sx={{ color: 'white' }} />
        </Button> */}
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        disablePortal={true}
        PaperProps={{
          sx: {
            p: 2,
            borderRadius: '12px',
            backdropFilter: 'blur(12px)',
            background: mode === 'dark' ? 'rgba(40, 40, 40, 0.7)' : 'rgba(255,255,255,0.6)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button onClick={() => handleSelect('map')}>
            <FmdGoodIcon sx={{ fontSize: 30, color: mapOrList === 'map' ? '#5200c2' : '#777' }} />
          </Button>

          <Button onClick={() => handleSelect('list')}>
            <FormatListBulletedIcon
              sx={{ fontSize: 30, color: mapOrList === 'list' ? '#5200c2' : '#777' }}
            />
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default MapSettingBar;
