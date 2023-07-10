import React from "react";
import { GoalCardButton, GoalCards } from "./GoalCard.style";

export default function GoalCard({ goal, onGoalClick }) {
  const { id, goalName } = goal;

  const handleClick = () => {
    onGoalClick(id);
  };

  return (
    <GoalCards>
      <GoalCardButton onClick={handleClick}>{goalName}</GoalCardButton>
    </GoalCards>
  );
}
