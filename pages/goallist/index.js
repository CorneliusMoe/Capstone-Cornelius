import GoalCard from "../../components/GoalCard";
import Header from "@/components/Header";
import Footer from "@/components/GeneralFooter";
import { useRouter } from "next/router";
import styled from "styled-components";

const GoalListContainer = styled.main`
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
  margin-bottom: 48px;
`;

const StyledHeadline = styled.h2`
  color: #272727;
  margin: 10px;
  font-size: 20px;
`;

export default function GoalList({ goals, deleteGoal, updateGoal }) {
  const router = useRouter();

  function handleGoalClick(id) {
    router.push(`/goal/${id}`);
  }

  function handleGoalDelete(id) {
    deleteGoal(id);
  }

  return (
    <GoalListContainer>
      <Header title="my goals" />
      <StyledHeadline>Select a goal to see its details</StyledHeadline>
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onGoalClick={handleGoalClick}
          onDeleteClick={() => handleGoalDelete(goal.id)}
          updateGoal={updateGoal}
        />
      ))}
      <Footer />
    </GoalListContainer>
  );
}
