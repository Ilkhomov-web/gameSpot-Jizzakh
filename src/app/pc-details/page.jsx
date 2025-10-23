'use client';
import React, { useState } from 'react';
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

const PcDetailsPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  const images = ['/logo.png', '/logo.png', '/logo.png', '/logo.png'];

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
                CyberX Gaming Zone
              </Typography>

              <Typography color="text.secondary" variant="body1">
                📍 Manzil: Jizzax sh., Mustaqillik ko‘chasi 12A
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ⏰ Ish vaqti: 09:00 — 23:00
              </Typography>

              <Typography variant="body2" color="text.secondary">
                💻 Kompyuterlar soni: 25 ta | 🎮 Playstation: 8 ta
              </Typography>

              <Typography variant="h6" sx={{ mt: 2 }}>
                💵 Narx: <strong>10 000 so‘m / soat</strong>
              </Typography>

              <Typography variant="body1" sx={{ mt: 2 }}>
                🔧 Xizmatlar:
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                {['Fast Wi-Fi', 'Snack bar', 'Turnir joyi', 'Konditsioner'].map((item) => (
                  <Box
                    key={item}
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
            <SelectedMap />
          </Box>
        </Fade>
      </Modal>

      <ChatDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} roomName="CyberX Gaming" />

      <Footer />
    </Box>
  );
};

export default PcDetailsPage;
