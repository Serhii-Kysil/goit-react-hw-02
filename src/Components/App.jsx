import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";

function App() {
  const storedFeedback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackTypes, setFeedbackTypes] = useState(storedFeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const handleGood = () => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      good: prevState.good + 1,
    }));
  };

  const handleNeutral = () => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      neutral: prevState.neutral + 1,
    }));
  };

  const handleBad = () => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      bad: prevState.bad + 1,
    }));
  };

  const handleReset = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = feedbackTypes;
  const totalFeedback = good + neutral + bad;

  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((good + neutral) / totalFeedback) * 100)
      : 0;

  return (
    <>
      <Description />
      <Options
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      <Feedback
        feedbackTypes={feedbackTypes}
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
      />
      <Notification totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
