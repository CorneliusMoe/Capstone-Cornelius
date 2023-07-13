import GlobalStyle from "../styles";
import { useState } from "react";
import { goals } from "../lib/data";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [allGoals, setGoals] = useState(goals);

  function deleteGoal(id) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function addGoal(goalData) {
    const newGoal = {
      id: uid(),
      ...goalData,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        goals={allGoals}
        deleteGoal={deleteGoal}
        addGoal={addGoal}
      />
    </>
  );
}
