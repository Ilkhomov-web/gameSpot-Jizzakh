import { Box, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import BadgeIcon from '@mui/icons-material/Badge';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useThemeContext } from '@/context/ThemeContext';
import Link from 'next/link';

const ListComponent = (prop) => {
  const { data } = prop;
  const { mode } = useThemeContext();
  return (
    <Link href={'pc-details'} style={{ textDecoration: 'none', color: 'currentcolor' }}>
      <Box
        sx={{
          background: '#3B0270',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '12px',
          padding: '0px 20px',
          position: 'relative',
          transition: 'all 0.3s ease',
          // border: '1px solid rgba(74,144,255,0.4)',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            background:
              'linear-gradient(91deg,rgba(99, 34, 161, 1) 0%, rgba(59, 2, 112, 1) 50%, rgba(114, 64, 161, 1) 100%)',
            boxShadow: '0 0 20px rgba(74,144,255,0.2), 0 0 40px rgba(111,66,193,0.2)',
            //   border: '1px solid rgba(74,144,255,0.4)',
            transform: 'translateY(-4px) scale(1.01)',
            transition: 'all 0.3s ease',
          },
        }}
      >
        {data.premium && (
          <Typography
            sx={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              background: 'red',
              borderTopRightRadius: '10px',
              padding: '5px 20px',
              color: 'white',
            }}
          >
            Premium
          </Typography>
        )}
        <Box component={'img'} width={'100px'} src={'/logo.png'}></Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <BadgeIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: mode === 'dark' ? 'white' : 'white' }}>{data.name}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          {data.type === 'pc' ? (
            <ComputerIcon sx={{ color: 'white' }} />
          ) : (
            <SportsEsportsIcon sx={{ color: 'white' }} />
          )}
          <Typography sx={{ color: mode === 'dark' ? 'white' : 'white' }}>
            {data.type === 'pc' ? 'Kompyuter' : 'PlayStation'}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <AccessAlarmIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: mode === 'dark' ? 'white' : 'white' }}>{data.price}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <Typography
            sx={{
              color: mode === 'dark' ? 'white' : 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            {data.rating}{' '}
          </Typography>
          <Typography>
            {Array.from({ length: data.rating }).map((_, index) => {
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
    </Link>
  );
};

export default ListComponent;
