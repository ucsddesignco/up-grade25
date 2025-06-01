import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
import Roles from './pages/RolesPage/RolesPage.tsx';
import Quiz from './pages/Quiz/Quiz.tsx';
import Result from './pages/ResultPage/Result.tsx';
import Overview from './pages/Overview/Overview.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/roles/:roleId" element={<Result />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
