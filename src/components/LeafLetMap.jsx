'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { data } from '@/app/data/Data';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import L from 'leaflet';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';

// 🔹 Custom iconlar
const pcIcon = new L.Icon({
  iconUrl: '/logo.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -45],
});

const psIcon = new L.Icon({
  iconUrl: '/logo.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -45],
});

const LeafLetMap = () => {
  const jizzax = [40.1158, 67.8422];

  return (
    <MapContainer
      center={jizzax}
      zoom={13}
      style={{
        height: '550px',
        width: '100%',
        borderRadius: '12px',
        marginBottom: '50px',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((item) => (
        <Marker
          key={item.id}
          icon={item.type === 'pc' ? pcIcon : psIcon}
          position={[item.location.lat, item.location.lng]}
        >
          <Popup>
            <Box
              sx={{
                p: '2px',
                borderRadius: 2,
                background: item.premium
                  ? 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700)'
                  : 'transparent',
              }}
            >
              <Card
                sx={{
                  minWidth: 200,
                  p: 1,
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: item.premium
                    ? '0 0 12px rgba(255, 215, 0, 0.5)'
                    : '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent sx={{ p: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    {item.type === 'pc' ? (
                      <ComputerIcon sx={{ color: '#3B0270' }} />
                    ) : (
                      <SportsEsportsIcon sx={{ color: '#3B0270' }} />
                    )}
                  </Box>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    💰 {item.price}
                  </Typography>
                  <Typography variant="body2">⭐ {item.rating}</Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    {item.premium && (
                      <Typography variant="caption" sx={{ color: 'gold', fontWeight: 600 }}>
                        🔥 Premium
                      </Typography>
                    )}

                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: '#3B0270',
                        '&:hover': { bgcolor: '#290252' },
                        fontSize: '12px',
                        borderRadius: '8px',
                        textTransform: 'none',
                      }}
                    >
                      Joylarni ko‘rish
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafLetMap;
