
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './global.scss';
import { BrowserRouter, Route, Routes } from "react-router";
import PersonalityQuiz from "./components/ui/PersonalityQuiz/PersonalityQuiz";
import Roles from "./pages/Roles/Roles";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/quiz" element={<PersonalityQuiz />} />
        <Route path="/roles" element={<Roles />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
