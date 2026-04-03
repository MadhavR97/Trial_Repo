import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const EmeraldYachts = lazy(() => import('../src/pages/EmeraldYachts/EmeraldYachts'));
const DrakePassagePage = lazy(() => import('../src/pages/DrakePassagePage/DrakePassagePage'));
const ScenicVSSilversea = lazy(() => import('../src/pages/ScenicVSSilversea/ScenicVSSilversea'));
const AntarcticaCruise = lazy(() => import('../src/pages/AntarcticaCruise/AntarcticaCruise'));
const ScenicAntarctica = lazy(() => import('../src/pages/ScenicAntarctica/ScenicAntarctica'));
const ScenicvsEmeraldYachts = lazy(() => import('../src/pages/ScenicvsEmeraldYachts/ScenicvsEmeraldYachts'));
const LuxuryTravel = lazy(() => import('./pages/LuxuryTravel/LuxuryTravel'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path='/' element={<EmeraldYachts />} />
          <Route path='/DrakePassagePage' element={<DrakePassagePage />} />
          <Route path='/scenic-vs-silversea-antarctica' element={<ScenicVSSilversea />} />
          <Route path='/antarctica-cruise-cost' element={<AntarcticaCruise />} />
          <Route path='/scenic-antarctica-cruise' element={<ScenicAntarctica />} />
          <Route path='/luxury-travel' element={<LuxuryTravel />} />
          <Route path='/ScenicvsEmeraldYachts' element={<ScenicvsEmeraldYachts />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App