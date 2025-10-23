import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

const useRouting = (userLocation, destination) => {
  const map = useMap();

  useEffect(() => {
    if (!userLocation || !destination) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(userLocation.lat, userLocation.lng),
        L.latLng(destination.lat, destination.lng),
      ],
      routeWhileDragging: false,
      addWaypoints: false,
      draggableWaypoints: false,
      show: false,
      createMarker: () => null,
      lineOptions: {
        styles: [{ color: '#4F46E5', weight: 5 }],
      },
    }).addTo(map);

    const panel = document.querySelector('.leaflet-routing-container');
    if (panel) panel.style.display = 'none';

    map.flyToBounds([
      [userLocation.lat, userLocation.lng],
      [destination.lat, destination.lng],
    ]);

    return () => map.removeControl(routingControl);
  }, [map, userLocation, destination]);
};

export default useRouting;
