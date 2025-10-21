import React from 'react';
import { Box, Typography } from '@mui/material';
import { useThemeContext } from '@/context/ThemeContext';
import StarIcon from '@mui/icons-material/Star';
import BadgeIcon from '@mui/icons-material/Badge';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const CardClub = (prop) => {
  const { mode } = useThemeContext();
  const { club } = prop;
  return (
    <Box
      sx={{
        background: '#3B0270',
        borderRadius: '12px',
        width: '270px',
        position: 'relative',
        boxShadow: '5px 10px 10px rgba(59, 2, 111, 0.5)',
      }}
    >
      <Box component={'img'} width={'100%'} height={'250px'} src={'/logo.png'}></Box>
      {club.premium && (
        <Typography
          sx={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            background: 'red',
            borderTopRightRadius: '12px',
            padding: '5px 20px',
            color: 'white',
          }}
        >
          Premium
        </Typography>
      )}
      <Box sx={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <BadgeIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: mode === 'dark' ? 'white' : 'white' }}>{club.name}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {club.type === 'pc' ? (
            <ComputerIcon sx={{ color: 'white' }} />
          ) : (
            <SportsEsportsIcon sx={{ color: 'white' }} />
          )}
          <Typography sx={{ color: mode === 'dark' ? 'white' : 'white' }}>
            {club.type === 'pc' ? 'Kompyuter' : 'PlayStation'}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <AccessAlarmIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: mode === 'dark' ? 'white' : 'white' }}>{club.price}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              color: mode === 'dark' ? 'white' : 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            {club.rating}{' '}
          </Typography>
          <Typography>
            {Array.from({ length: club.rating }).map((_, index) => {
              return (
                <StarIcon
                  key={index}
                  sx={{ color: 'gold', fontSize: { xs: '10px', lg: '20px' } }}
                />
              );
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardClub;
