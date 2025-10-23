'use client';
import React, { useEffect, useState } from 'react';
import { Box, Modal, Fade, Typography, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import useRouting from '@/hook/useRouting';

const Routing = ({ userLocation, destination }) => {
  useRouting(userLocation, destination);
  return null;
};

const pcIcon = new L.Icon({
  iconUrl: '/logo.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -45],
});

const userIcon = new L.Icon({
  iconUrl: '/userLocationIcon.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -45],
});

const SelectedMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const data = {
    id: 1,
    name: 'CyberZone',
    type: 'pc',
    price: "10 000 so'm/soat",
    rating: 4.7,
    premium: true,
    image: '/logo.png',
    location: { lat: 40.1162, lng: 67.8425 },
    address: "Jizzax markazi, Mustaqillik ko'chasi",
  };

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

  if (!userLocation) return <Typography align="center">📍 Joylashuv aniqlanmoqda...</Typography>;

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

        <Marker
          icon={pcIcon}
          position={[data.location.lat, data.location.lng]}
          eventHandlers={{
            click: () => {
              setSelected(data);
              setOpen(true);
            },
          }}
        >
          <Popup>{data.name}</Popup>
        </Marker>

        {selected && <Routing userLocation={userLocation} destination={data.location} />}
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
              src={selected?.image}
              alt={selected?.name}
              style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
            />
            <Typography variant="h6" fontWeight={600}>
              {selected?.name}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {selected?.address}
            </Typography>
            <Typography sx={{ mt: 1 }}>💵 {selected?.price}</Typography>
            <Typography sx={{ mt: 1 }}>⭐ {selected?.rating} / 5.0</Typography>
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
