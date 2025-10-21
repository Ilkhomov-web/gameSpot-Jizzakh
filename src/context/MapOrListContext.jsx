'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';

const MapOrListSettings = createContext();

export const MapOrListProvider = (props) => {
  const [mapOrList, setMapOrList] = useState('map');

  const toggleMapOrList = (arg) => setMapOrList(arg);

  const value = useMemo(() => ({ mapOrList, toggleMapOrList }), [mapOrList]);

  return <MapOrListSettings.Provider value={value}>{props.children}</MapOrListSettings.Provider>;
};

export const useMapOrList = () => useContext(MapOrListSettings);
