import styled from "styled-components";

const GoalCards = styled.div`
  text-align: center;
  word-break: break-all;
`;

const GoalCardButton = styled.button`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #272727;
  margin: 10px;
  height: 80px;
  max-width: 600px;
  min-width: 300px;
  border-radius: 10px;
  border-style: none;
  background: #93bfcf;
`;

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
