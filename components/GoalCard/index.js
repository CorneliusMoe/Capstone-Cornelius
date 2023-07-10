import React from "react";
import { GoalCardButton, GoalCards } from "./GoalCard.style";

export default function GoalCard({ goal }) {
  const { goalName } = goal;

  return (
    <GoalCards>
      <GoalCardButton>{goalName}</GoalCardButton>
    </GoalCards>
  );
}
