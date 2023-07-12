import GlobalStyle from "../styles";
import { useState } from "react";
import { goals } from "../lib/data";

export default function App({ Component, pageProps }) {
  const [allGoals, setGoals] = useState(goals);

  function deleteGoal(id) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} goals={allGoals} deleteGoal={deleteGoal} />
    </>
  );
}
