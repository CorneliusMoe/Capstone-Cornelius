import GlobalStyle from "../styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import { goals } from "../lib/data";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [allGoals, setGoals] = useState([]);
  const [timelyOption, setTimelyOption] = useState("text");

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    } else {
      setGoals(goals);
    }
  }, []);

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
      timelyOption: timelyOption,
    };

    const existingGoal = allGoals.find((goal) => goal.id === newGoal.id);

    setGoals((prevGoals) => {
      let updatedGoals;

      if (existingGoal) {
        updatedGoals = prevGoals.map((goal) =>
          goal.id === newGoal.id ? newGoal : goal
        );
      } else {
        updatedGoals = [...prevGoals, newGoal];
      }

      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  }

  function updateGoal(updatedGoal) {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
      );
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <GlobalStyle />
      <Component
        {...pageProps}
        goals={allGoals}
        deleteGoal={deleteGoal}
        addGoal={addGoal}
        updateGoal={updateGoal}
        timelyOption={timelyOption}
        setTimelyOption={setTimelyOption}
      />
    </>
  );
}
