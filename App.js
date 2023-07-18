import React, { useState } from "react";
import axios from "axios";
import MondayStayForm from "./Components/Forms/MondayStayForm";
import './App.css';
import soclogo from './socdows logo.png';
import SchoolOfShanties from './School of Shanties master.wav';
import NameForm from './Components/Forms/NameForm';
import HackathonForm from './Components/Forms/HackathonForm';
import TuesdayStayForm from './Components/Forms/TuesdayStayForm';
import CelebrationForm from './Components/Forms/CelebrationForm';
import DrinkPreferenceForm from "./Components/Forms/DrinkPreferenceForm";
import ThankYouMessage from "./Components/Forms/ThankYouMessage";

const formSequence = [
  NameForm,
  MondayStayForm,
  HackathonForm,
  TuesdayStayForm,
  CelebrationForm,
  DrinkPreferenceForm,
  ThankYouMessage,
];

function App() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [response, setResponse] = useState([]);

  const handleNextForm = async (data) => {
    try {
      if (currentFormIndex === 0) {
        const { name, email } = data;
        await axios.post('/attendees', { name, email });
        console.log(data, "ElephantSQL");
      } else if (currentFormIndex === 5) {
        const { none, beer, wine, spirits, beast } = data;
        await axios.post('/drink-preferences', { no_alcohol: none, beer, wine, spirits, beast });
      }

      setCurrentFormIndex(currentFormIndex + 1);
      setResponse([...response, data]);
    } catch (error) {
      // console.error('Error submitting response:', error);
    }
  };

  const CurrentForm = formSequence[currentFormIndex];

  if (!CurrentForm) {
    return <div>No form found</div>;
  }

  return (
    <div className="App">
      <div className="background-image">
        <header className="App-header">
          <img src={soclogo} className="App-logo" alt="logo" />
        </header>
        <CurrentForm onNext={handleNextForm} />
      </div>
    </div>
  );
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
