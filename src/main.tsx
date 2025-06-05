import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
import RolesPage from './pages/RolesPage/RolesPage.tsx';
import Quiz from './pages/Quiz/Quiz.tsx';
import Result from './pages/ResultPage/Result.tsx';
import Overview from './pages/Overview/Overview.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import FAQPage from './pages/FAQpage/FAQpage.tsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/roles/:roleId" element={<Result />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
