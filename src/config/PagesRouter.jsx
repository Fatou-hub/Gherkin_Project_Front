import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'; // Import Navigate for redirects
import Homepage from '../pages/homepage';
import DragAndDropContainerDailychecks from '../utils/DragAndDropContainerDailychecks';
import DragAndDropContainerCommon from '../utils/DragAndDropContainerCommon';
import DragAndDropContainerDetails from '../utils/DragAndDropContainerDetails';
import DragAndDropContainerQACore from '../utils/DragAndDropContainerQACore';
import DragAndDropContainerSey from '../utils/DragAndDropContainerSey';
import DragAndDropContainerScrap from '../utils/DragAndDropContainerScrap';
import DragAndDropContainerSitemap from '../utils/DragAndDropContainerSitemap';
import Login from '../components/login';
import '../App.css';
import DragAndDropContainerEasyEntry from '../utils/DragAndDropContainerEasyEntry';
import DragAndDropContainerCatalog from '../utils/DragAndDropContainerCatalog';
import DragAndDropcreation from '../utils/DragAndDropcreation';
import Menu from '../components/newMenu';
import DragAndDropContainerFcrSplit from '../utils/DragAndDropContainerFcrSplit';
import DragAndDropContainerShorts from '../utils/DragAndDropContainerShorts';
import GherkinMotsClesPage from '../pages/GherkinMotsClesPage';
import GherkinCreationPage from '../pages/GherkinCreationPage';
import StepDefinitionPage from '../pages/StepDefinitionPage';

// Component to wrap routes and conditionally display the menu
const AppContent = () => {
  const location = useLocation();
  // Check if the current path is not "/login"
  const shouldShowMenu = location.pathname !== '/login';

  return (
    <>
      {shouldShowMenu && <Menu />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} /> {/* Redirect root to login */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/gherkin-mots-cles" element={<GherkinMotsClesPage />} />
        <Route path="/gherkin-creation-page" element={<GherkinCreationPage />} />
        <Route path="Backstage/Catalog_Optimization" element={<DragAndDropContainerCatalog />} />
        <Route path="Backstage/Easy_Entry" element={<DragAndDropContainerEasyEntry />} />
        <Route path="Backstage/Fcr_Split" element={<DragAndDropContainerFcrSplit />} />
        <Route path="Backstage/Shorts" element={<DragAndDropContainerShorts />} />
        <Route path="Backstage/Dailychecks" element={<DragAndDropContainerDailychecks />} />
        <Route path="/Common" element={<DragAndDropContainerCommon />} />
        <Route path="/Details" element={<DragAndDropContainerDetails />} />
        <Route path="/QA_Core" element={<DragAndDropContainerQACore />} />
        <Route path="/SEY" element={<DragAndDropContainerSey />} />
        <Route path="/Scrap" element={<DragAndDropContainerScrap />} />
        <Route path="/Sitemap" element={<DragAndDropContainerSitemap />} />
        <Route path="Backstage/Create_a_new_Gherkin" element={<DragAndDropcreation />} />
        <Route path="/step_definition" element={<StepDefinitionPage />} />
      </Routes>
    </>
  );
};

const PagesRouter = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default PagesRouter;

