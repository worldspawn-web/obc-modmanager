import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routenames } from './routenames';
import { MainPage } from '../pages';

const ETS2Page = lazy(() => import('../pages/ETS2/ETS2Page'));
const Error404 = lazy(() => import('../pages/Error404/PageNotFound'));
const BeamNGPage = lazy(() => import('../pages/BeamNG/BeamNGPage'));
const GmodPage = lazy(() => import('../pages/GMOD/GmodPage'));
const MinecraftPage = lazy(() => import('../pages/Minecraft/MinecraftPage'));
const SoftwarePage = lazy(() => import('../pages/Software/SoftwarePage'));
const LethalCompanyPage = lazy(
  () => import('../pages/LethalCompany/LethalCompanyPage')
);

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<MainPage />} />
    <Route path={routenames.ETS2} element={<ETS2Page />} />
    <Route path={routenames.BEAMNG} element={<BeamNGPage />} />
    <Route path={routenames.GMOD} element={<GmodPage />} />
    <Route path={routenames.LETHALCOMPANY} element={<LethalCompanyPage />} />
    <Route path={routenames.MINECRAFT} element={<MinecraftPage />} />
    <Route path={routenames.SOFTWARE} element={<SoftwarePage />} />
    <Route path={routenames.NOT_FOUND} element={<Error404 />} />
  </Routes>
);
