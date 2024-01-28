import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routenames } from './routenames';
import MainPage from '../pages/MainPage/MainPage';

const ETS2 = lazy(() => import('../pages/ETS2/ETS2'));

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<MainPage />} />
    <Route path={routenames.ETS2} element={<ETS2 />} />
  </Routes>
);
