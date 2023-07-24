import { GoalCardButton, GoalCards } from "./GoalCard.styled";

export default function GoalCard({ goal, onGoalClick }) {
  const { id, goalName } = goal;

  function handleClick() {
    onGoalClick(id);
  }

  return (
    <GoalCards>
      <GoalCardButton onClick={handleClick}>{goalName}</GoalCardButton>
    </GoalCards>
  );
}
