import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routenames } from './routenames';
import { MainPage } from '../pages';

const ETS2Page = lazy(() => import('../pages/ETS2/ETS2Page'));
const Error404 = lazy(() => import('../pages/Error404/PageNotFound'));

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<MainPage />} />
    <Route path={routenames.ETS2} element={<ETS2Page />} />
    <Route path={routenames.NOT_FOUND} element={<Error404 />} />
  </Routes>
);
