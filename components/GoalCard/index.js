import React from "react";

export default function GoalCard({ goal }) {
  const { goalName, specific } = goal;

  return (
    <div>
      <button>{goalName}</button>
    </div>
  );
}
