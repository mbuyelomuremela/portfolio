import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import EducationPage from "@/pages/EducationPage";
import ExperiencePage from "@/pages/ExperiencePage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
