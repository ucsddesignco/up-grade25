import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import PersonalityQuiz from './pages/PersonalityQuiz/PersonalityQuiz.tsx';
import Overview from "./pages/Overview/Overview.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/quiz" element={<PersonalityQuiz />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
