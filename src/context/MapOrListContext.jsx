'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';

const MapOrListSettings = createContext();

export const MapOrListProvider = ({ children }) => {
  const [mapOrList, setMapOrList] = useState('map');

  const toggleMapOrList = () => setMapOrList((prev) => (prev === 'map' ? 'list' : 'map'));

  const value = useMemo(() => ({ mapOrList, toggleMapOrList }), [mapOrList]);

  return <MapOrListSettings.Provider value={value}>{children}</MapOrListSettings.Provider>;
};

export const useMapOrList = () => useContext(MapOrListSettings);
