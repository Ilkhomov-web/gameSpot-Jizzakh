'use client';
import { useThemeContext } from '@/context/ThemeContext';
import { Container, Typography, Box } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardClub from '@/components/CardClub';
import { data } from './data/Data';
import LeafLetMap from '@/components/LeafLetMap';
import MapSettingBar from '@/components/MapSettingBar';
import ListComponent from '@/components/ListComponent';
import { useMapOrList } from '@/context/MapOrListContext';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import Loading from '@/components/Loading';

export default function HomePage() {
  const { mode } = useThemeContext();
  const { mapOrList } = useMapOrList();
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Container>
        <Typography
          sx={{
            color: mode === 'dark' ? 'white' : '#3B0270',
            fontSize: { xs: '12px', lg: '30px' },
          }}
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            margin: '30px 0px',
            height: mapOrList === 'list' ? '650px' : 'auto',
            overflowY: 'auto',
            padding: '10px 20px',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.2)', // yarim shaffof
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: 'rgba(0,0,0,0.3)', // hoverda biroz quyuqroq
            },
          }}
        >
          {mapOrList === 'map' ? (
            <LeafLetMap data={data} /> // ✅ faqat bitta xarita
          ) : (
            data.map((item) => <ListComponent key={item.id} data={item} />)
          )}
        </Box>
      </Container>
    </>
  );
}
