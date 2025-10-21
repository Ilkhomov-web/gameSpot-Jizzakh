'use client';
import { useThemeContext } from '@/context/ThemeContext';
import { Button, Container, Typography, Card, CardContent, Box } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardClub from '@/components/CardClub';
import { data } from './data/Data';
import LeafLetMap from '@/components/LeafLetMap';
import MapSettingBar from '@/components/MapSettingBar';

export default function HomePage() {
  const { mode } = useThemeContext();
  return (
    <Container>
      <Typography
        sx={{ color: mode === 'dark' ? 'white' : '#3B0270', fontSize: { xs: '12px', lg: '30px' } }}
      >
        Premium Clublar
        <WorkspacePremiumIcon sx={{ fontSize: '30px' }} />
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px 0px' }}>
        {data
          .filter((club) => club.premium)
          .map((club) => (
            <CardClub key={club.id} club={club} />
          ))}
      </Box>
      <MapSettingBar />
      <LeafLetMap />
    </Container>
  );
}
