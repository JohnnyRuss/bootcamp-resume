import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import PersonalInfoFormPage from "./pages/PersonalInfoFormPage";
import ExperienceInfoFormPage from "./pages/ExperienceInfoFormPage";
import EducationInfoFormPage from "./pages/EducationInfoFormPage";
import UserResumePage from "./pages/UserResumePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />}>
        <Route path="personal-info" element={<PersonalInfoFormPage />} />
        <Route path="experience" element={<ExperienceInfoFormPage />} />
        <Route path="education" element={<EducationInfoFormPage />} />
      </Route>
      <Route path="/user-resume" element={<UserResumePage />} />
    </Routes>
  );
}

export default App;
