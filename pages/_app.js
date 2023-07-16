import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import { goals } from "../lib/data";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [allGoals, setGoals] = useState([]);

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    } else {
      setGoals(goals);
    }
  }, []);
  const [timelyOption, setTimelyOption] = useState("text");

  function deleteGoal(id) {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== id);
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  }

  function addGoal(goalData) {
    const newGoal = {
      id: uid(),
      ...goalData,
    };
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals, newGoal];
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  }
  console.log(goals);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        goals={allGoals}
        deleteGoal={deleteGoal}
        addGoal={addGoal}
        timelyOption={timelyOption}
        setTimelyOption={setTimelyOption}
      />
    </>
  );
}
