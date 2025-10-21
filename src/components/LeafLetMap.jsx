import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafLetMap = () => {
  const jizzax = [40.1158, 67.8422];

  return (
    <MapContainer
      center={jizzax}
      zoom={13}
      style={{ height: '500px', width: '100%s', borderRadius: '12px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={jizzax}>
        <Popup>Jizzaxdagi PlayStation xona 🎮</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafLetMap;
