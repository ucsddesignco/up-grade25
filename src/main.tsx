
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './global.scss';
import { BrowserRouter, Route, Routes } from "react-router";
import PersonalityQuiz from "./components/ui/PersonalityQuiz/PersonalityQuiz.tsx";
import Roles from "./pages/Roles/Roles.tsx";
import Quiz from "./pages/Quiz/Quiz.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/roles" element={<Roles />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
