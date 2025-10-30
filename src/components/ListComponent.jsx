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
    <Link href={`/pc-details/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: { xs: '10px', md: '20px' },
          background: '#3B0270',
          borderRadius: '12px',
          p: { xs: '10px', md: '15px' },
          position: 'relative',
          cursor: 'pointer',
          transition: 'all .3s ease',
          backdropFilter: 'blur(8px)',
          width: '100%',
          '&:hover': {
            background:
              'linear-gradient(91deg,rgba(99, 34, 161, 1) 0%, rgba(59, 2, 112, 1) 50%, rgba(114, 64, 161, 1) 100%)',
            boxShadow: '0 0 20px rgba(74,144,255,0.2), 0 0 40px rgba(111,66,193,0.2)',
            transform: { sm: 'translateY(-4px) scale(1.01)' },
          },
        }}
      >
        {data.premium && (
          <Typography
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: 'red',
              borderTopRightRadius: '10px',
              p: '5px 15px',
              color: 'white',
              fontSize: { xs: '10px', md: '14px' },
            }}
          >
            Premium
          </Typography>
        )}

        <Box
          component="img"
          src={'/logo.png'}
          sx={{
            width: { xs: '100%', sm: '90px' },
            height: { xs: '120px', sm: '90px' },
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'flex-start', sm: 'space-between' },
            width: '100%',
            gap: '8px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BadgeIcon sx={{ color: 'white', fontSize: { xs: 14, md: 18 } }} />
            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 16 } }}>
              {data.name}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {data.type === 'pc' ? (
              <ComputerIcon sx={{ color: 'white', fontSize: { xs: 14, md: 18 } }} />
            ) : (
              <SportsEsportsIcon sx={{ color: 'white', fontSize: { xs: 14, md: 18 } }} />
            )}
            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 16 } }}>
              {data.type === 'pc' ? 'Kompyuter' : 'PlayStation'}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AccessAlarmIcon sx={{ color: 'white', fontSize: { xs: 14, md: 18 } }} />
            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 16 } }}>
              {data.price}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 16 } }}>
              {data.rating}
            </Typography>
            <Box>
              {Array.from({ length: data.rating }).map((_, index) => (
                <StarIcon key={index} sx={{ color: 'gold', fontSize: { xs: 12, md: 18 } }} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ListComponent;
