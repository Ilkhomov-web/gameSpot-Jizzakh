'use client';
import React, { useEffect, useState } from 'react';
import { Box, Modal, Fade, Typography, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import useRouting from '@/hook/useRouting';

const Routing = ({ userLocation, destination }) => {
  useRouting(userLocation, destination);
  return null;
};

const SelectedMap = ({ room }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error('Geolocation xatosi:', err);
        setUserLocation({ lat: 40.1202, lng: 67.8425 });
      }
    );
  }, []);

  if (!room) {
    return (
      <Typography align="center" sx={{ mt: 5 }}>
        ⚠️ Ma’lumot topilmadi
      </Typography>
    );
  }

  if (!userLocation) return <Typography align="center">📍 Joylashuv aniqlanmoqda...</Typography>;

  const userIcon = new L.Icon({
    iconUrl: '/userLocationIcon.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const pcIcon = new L.Icon({
    iconUrl: room.imageLogo || '/logo.png',
    iconSize: [45, 45],
    iconAnchor: [22, 45],
  });

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <MapContainer center={userLocation} zoom={14} style={{ width: '100%', height: '550px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker icon={userIcon} position={[userLocation.lat, userLocation.lng]}>
          <Popup>Sizning joylashuvingiz</Popup>
        </Marker>

        {room && (
          <Marker
            icon={pcIcon}
            position={[room.lat, room.lng]}
            eventHandlers={{
              click: () => setOpen(true),
            }}
          >
            <Popup>{room.name}</Popup>
          </Marker>
        )}
        {room && <Routing userLocation={userLocation} destination={room} />}
      </MapContainer>
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <Fade in={open}>
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'white',
              borderRadius: 3,
              boxShadow: 24,
              p: 3,
              width: { xs: '90%', sm: 400 },
              textAlign: 'center',
            }}
          >
            <img
              src={room.imageLogo || '/logo.png'}
              alt={room.name}
              style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
            />
            <Typography variant="h6" fontWeight={600}>
              {room.name}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {room.address}
            </Typography>
            <Typography sx={{ mt: 1 }}>💵 {room.price} so‘m/soat</Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#4F46E5',
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': { bgcolor: '#4338CA' },
              }}
              onClick={() => setOpen(false)}
            >
              Yopish
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default SelectedMap;
