import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const [isExperienceEditing, setIsExperienceEditing] = useState(true);
  const [isGeneralEditing, setIsGeneralEditing] = useState(true);
  const [isEducationEditing, setIsEducationEditing] = useState(true);
  return (
    <div className="app">
      <Header />

      <div className="container">
        <div className="forms">
          <GeneralInfo
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            isEditing={isGeneralEditing}
            setIsEditing={setIsGeneralEditing}
          />

          <Education
            education={education}
            setEducation={setEducation}
            isEditing={isEducationEditing}
            setIsEditing={setIsEducationEditing}
          />

          <Experience
            experience={experience}
            setExperience={setExperience}
            isEditing={isExperienceEditing}
            setIsEditing={setIsExperienceEditing}
          />
        </div>

        <CVPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
