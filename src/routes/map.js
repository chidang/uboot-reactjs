import AsyncComponent from '../components/AsyncComponent';

const AsyncGoogleMaps = AsyncComponent(() => import('../containers/Map/GoogleMaps'));
const AsyncVectorMaps = AsyncComponent(() => import('../containers/Map/VectorMaps'));

const MapRoutes = {
    key: 'map',
    name: "Map",
    badgeColor: "info",
    badgeText: "17",
    containsHome: false,
    icon: 'bi-map',
    children: [
      {
        path: "/maps/google-map",
        name: "Google Map",
        component: AsyncGoogleMaps
      },
      {
        path: "/maps/vector-map",
        name: "Vector Map",
        component: AsyncVectorMaps
      }
    ]
};

export default MapRoutes;