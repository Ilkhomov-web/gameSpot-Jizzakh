'use client';
import { useThemeContext } from '@/context/ThemeContext';
import { Container, Typography, Box } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardClub from '@/components/CardClub';
import LeafLetMap from '@/components/LeafLetMap';
import MapSettingBar from '@/components/MapSettingBar';
import ListComponent from '@/components/ListComponent';
import { useMapOrList } from '@/context/MapOrListContext';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import Loading from '@/components/Loading';
import MarqueeComponents from '@/components/MarqueeComponents';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { getAllRooms } from '@/services/firestore/roomService';

export default function HomePage() {
  const { mode } = useThemeContext();
  const { mapOrList } = useMapOrList();
  const { loading } = useAuth();
  const [rooms, setRooms] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRooms();
        setRooms(data);
      } catch (err) {
        console.error('Error fetching rooms:', err);
      } finally {
        setFetching(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading || fetching) return <Loading />;

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
        <Typography
          sx={{
            color: mode === 'dark' ? 'white' : '#3B0270',
            fontSize: { xs: '18px', md: '28px', lg: '35px' },
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 2,
          }}
        >
          Premium Clublar
          <WorkspacePremiumIcon sx={{ fontSize: { xs: 20, md: 30 } }} />
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
            },
            gap: 2,
            py: 3,
          }}
        >
          {rooms
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
            gap: 2,
            mt: 3,
            height: mapOrList === 'list' ? { xs: '500px', md: '650px' } : 'auto',
            overflowY: mapOrList === 'list' ? 'auto' : 'visible',
            px: { xs: 1, md: 2 },
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: '10px',
            },
          }}
        >
          {mapOrList === 'map' ? (
            <LeafLetMap data={rooms} />
          ) : (
            rooms.map((item) => <ListComponent key={item.id} data={item} />)
          )}
        </Box>

        <Typography
          sx={{
            fontSize: { xs: '22px', md: '32px', lg: '45px' },
            color: '#3B0270',
            fontWeight: 600,
            mt: 5,
            mb: 2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Bizning Homiylar
        </Typography>
        <MarqueeComponents />
      </Container>
      <Footer />
    </>
  );
}
