'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { useAuth } from '@/context/AuthContext';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Link from 'next/link';

const LeafLetMap = ({ data }) => {
  const jizzax = [40.1158, 67.8422];
  const { user } = useAuth();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '550px',
        width: '100%',
        borderRadius: '12px',
        marginBottom: '50px',
        overflow: 'hidden',

        '&::after': !user
          ? {
              content: '"Avval Ro\'yxatdan O\'ting"',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(8px)',
              color: 'red',
              fontWeight: 'bold',
              fontSize: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              zIndex: 2,
            }
          : {},
      }}
    >
      <MapContainer
        center={jizzax}
        zoom={13}
        style={{
          height: '550px',
          width: '100%',
          borderRadius: '12px',
          marginBottom: '50px',
          filter: user ? 'blur(0px)' : 'blur(10px)',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((item) => {
          const iconUrl = item.imageLogo?.trim() || '/logo.png';

          const icon = new L.Icon({
            iconUrl: '/logo.png',
            iconSize: [45, 45],
            iconAnchor: [22, 45],
            popupAnchor: [0, -45],
          });

          return (
            <Marker key={item.id} icon={icon} position={[item.lat, item.lng]}>
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
                        ? '0 0 12px rgba(255, 215, 0, 5)'
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
                        💰 {item.price.toLocaleString()} so‘m/soat
                      </Typography>
                      <Typography variant="body2">⭐ {item.rating || 'Yangi'}</Typography>

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

                        <Link href={`/pc-details/${item.id}`}>
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
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Box>
  );
};

export default LeafLetMap;
