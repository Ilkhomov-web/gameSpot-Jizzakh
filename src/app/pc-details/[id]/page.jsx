'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Card,
  CardMedia,
  Modal,
  Fade,
} from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatDrawer from '@/components/ChatDrawer';
import SelectedMap from '@/components/SelectedMap';
import { useParams } from 'next/navigation';
import Loading from '@/components/Loading';
import { db } from '@/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const PcDetailsPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const docRef = doc(db, 'rooms', 'rooms');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRoom(docSnap.data());
        } else {
          console.error('Room topilmadi');
          setRoom(null);
        }
      } catch (err) {
        console.error('Xatolik:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) return <Loading />;
  if (!room) return <Typography sx={{ textAlign: 'center', mt: 10 }}>Room topilmadi 😕</Typography>;

  const images = room.roomsImage || ['/logo.png', '/logo.png', '/logo.png', '/logo.png'];

  console.log(room);

  return (
    <Box>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              {images.map((img, i) => (
                <Card
                  key={i}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: 3,
                    cursor: 'zoom-in',
                    transition: '0.3s',
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                  onClick={() => handleOpen(img)}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`Gaming room ${i}`}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h4" fontWeight={600}>
                {room.name}
              </Typography>

              <Typography color="text.secondary" variant="body1">
                📍 Manzil: {room.address}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ⏰ Ish vaqti: {room.workTime}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                💻 Kompyuterlar soni: {room.pcsPiece} ta | 🎮 Playstation: {room.pcPiece} ta
              </Typography>

              <Typography variant="h6" sx={{ mt: 2 }}>
                💵 Narx: <strong>{room.price} so‘m / soat</strong>
              </Typography>

              <Typography variant="body1" sx={{ mt: 2 }}>
                🔧 Xizmatlar:
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                {room.features?.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '999px',
                      bgcolor: 'grey.100',
                      fontSize: 14,
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Stack>

              <Box sx={{ display: 'flex', gap: '20px' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    bgcolor: '#4F46E5',
                    '&:hover': { bgcolor: '#4338CA' },
                  }}
                  onClick={() => setDrawerOpen(true)}
                >
                  Joy band qilish
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    bgcolor: '#4F46E5',
                    '&:hover': { bgcolor: '#4338CA' },
                  }}
                  onClick={() => setMapOpen(true)}
                >
                  Karta orqali borish
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              outline: 'none',
              bgcolor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              borderRadius: 2,
              width: '100%',
              height: '100%',
            }}
            onClick={handleClose}
          >
            <Box
              component="img"
              src={selectedImg || ''}
              alt="Preview"
              sx={{
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: 2,
                boxShadow: 5,
                objectFit: 'contain',
                cursor: 'zoom-out',
              }}
            />
          </Box>
        </Fade>
      </Modal>

      <Modal open={mapOpen} onClose={() => setMapOpen(false)} closeAfterTransition>
        <Fade in={mapOpen}>
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50%',
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              overflow: 'hidden',
            }}
          >
            <SelectedMap room={room} />
          </Box>
        </Fade>
      </Modal>

      {/* Chat oynasi */}
      <ChatDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        room={{ id: 'rooms', name: room.name }}
      />

      <Footer />
    </Box>
  );
};

export default PcDetailsPage;
