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
          {rooms
            .filter((club) => club.premium)
            .map((club) => (
              <CardClub key={club.id} club={club} />
            ))}{' '}
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

        <Typography sx={{ fontSize: { xs: '18px', lg: '50px', color: '#3B0270' } }}>
          Bizning Homiylar
        </Typography>
        <MarqueeComponents />
      </Container>
      <Footer />
    </>
  );
}
