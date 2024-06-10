import 'bootstrap/dist/css/bootstrap.min.css';
import SatellitesViewer from "./components/Drift/SatellitesViewer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriftVisualisation from './components/Drift/DriftVisualisation';
import { useState } from 'react';
import Home from './components/Home/Home';
import { WebSocketProvider, useWebSocket } from './context/WebSocketContext';
import SocketStatus from './components/Common/SocketStatus';
import AsteroidListScreen from './components/Asteroid/AsteroidListScreen';
import AsteroidOrbit from './components/Asteroid/AsteroidOrbit';

function App() {
  const [selectedSatelliteName, setSelectedSatelliteName] = useState('');

  return (
    <WebSocketProvider>
      <BrowserRouter>
        <SocketStatus />
        <Routes>
          <Route path="/satellites" element={<SatellitesViewer setSelectedSatelliteName={setSelectedSatelliteName} />} />
          <Route path="/drift" element={<DriftVisualisation satName={selectedSatelliteName} />} />
          <Route path="/asteroids" element={<AsteroidListScreen />} />
          <Route path="/asteroid/:asteroidId" element={<AsteroidOrbit/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </WebSocketProvider>
  );
}

export default App;
