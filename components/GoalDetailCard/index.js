import { useRouter } from "next/router";
import GoalListHeader from "@/components/GoalListHeader";
import { styled } from "styled-components";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;

export default function GoalDetailCard({ goal, deleteGoal, timelyOption }) {
  const { goalName, specific, measurable, achievable, relevant, timely } = goal;
  const router = useRouter();

  function handleGoBack() {
    router.push("/goallist");
  }

  function handleDelete() {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this goal?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteGoal(goal.id);
            router.push("/goallist");
          },
        },
        {
          label: "No",
          onClick: () => {
            if (router.asPath.includes("/goal")) {
              router.push(router.asPath);
            }
          },
        },
      ],
    });
  }

  function formatTimelyDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  return (
    <>
      <GoalListHeader />
      <section>
        <h2>{goalName}</h2>
        <dl>
          <dt>Specific</dt>
          <dd>{specific}</dd>
          <dt>Measurable</dt>
          <dd>{measurable}</dd>
          <dt>Achievable</dt>
          <dd>{achievable}</dd>
          <dt>Relevant</dt>
          <dd>{relevant}</dd>
          <dt>Timely</dt>
          <dd>{timelyOption === "date" ? formatTimelyDate(timely) : timely}</dd>
        </dl>
      </section>
      <StyledButton onClick={handleGoBack}>Back to my Goals</StyledButton>
      <StyledButton onClick={handleDelete}>Delete Goal</StyledButton>
    </>
  );
}
