import React from 'react';
import { Box, Typography } from '@mui/material';
import { useThemeContext } from '@/context/ThemeContext';
import StarIcon from '@mui/icons-material/Star';
import BadgeIcon from '@mui/icons-material/Badge';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Link from 'next/link';

const CardClub = (prop) => {
  const { mode } = useThemeContext();
  const { club } = prop;

  return (
    <Link href={`/pc-details/${club.id}`} style={{ textDecoration: 'none', color: 'currentcolor' }}>
      <Box
        sx={{
          width: { xs: '100%', sm: '48%', md: '270px' },
          background: '#3B0270',
          justifyContent: 'space-between',
          borderRadius: '12px',
          position: 'relative',
          transition: 'all 0.5s ease',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            background:
              'linear-gradient(91deg,rgba(99, 34, 161, 1) 0%, rgba(59, 2, 112, 1) 50%, rgba(114, 64, 161, 1) 100%)',
            boxShadow: '0 0 20px rgba(74,144,255,0.2), 0 0 40px rgba(111,66,193,0.2)',
            transform: 'translateY(-10px) scale(1.01)',
            transition: 'all 0.5s ease',
          },
        }}
      >
        <Box
          component="img"
          width="100%"
          height={{ xs: '180px', md: '250px' }}
          src={club.image || '/logo.png'}
        />

        {club.premium && (
          <Typography
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: 'red',
              borderTopRightRadius: '10px',
              padding: '5px 20px',
              fontSize: { xs: '10px', sm: '12px' },
              color: 'white',
            }}
          >
            Premium
          </Typography>
        )}

        <Box sx={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <BadgeIcon sx={{ color: 'white', fontSize: { xs: '16px', md: '22px' } }} />
            <Typography sx={{ color: 'white', fontSize: { xs: '12px', md: '16px' } }}>
              {club.name}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {club.type === 'pc' ? (
              <ComputerIcon sx={{ color: 'white', fontSize: { xs: '16px', md: '22px' } }} />
            ) : (
              <SportsEsportsIcon sx={{ color: 'white', fontSize: { xs: '16px', md: '22px' } }} />
            )}
            <Typography sx={{ color: 'white', fontSize: { xs: '12px', md: '14px' } }}>
              {club.type === 'pc' ? 'Kompyuter' : 'PlayStation'}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <AccessAlarmIcon sx={{ color: 'white', fontSize: { xs: '16px', md: '22px' } }} />
            <Typography sx={{ color: 'white', fontSize: { xs: '12px', md: '14px' } }}>
              {club.price}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: { xs: '12px', md: '14px' },
              }}
            >
              {club.rating}
            </Typography>
            <Typography>
              {Array.from({ length: club.rating }).map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{ color: 'gold', fontSize: { xs: '12px', md: '20px' } }}
                />
              ))}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default CardClub;
