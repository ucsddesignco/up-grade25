import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
import Roles from './pages/RolesPage/RolesPage.tsx';
import Quiz from './pages/Quiz/Quiz.tsx';
import Overview from './pages/Overview/Overview.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/result" element={<Result />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
