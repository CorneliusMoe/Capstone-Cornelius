import { useRouter } from "next/router";
import GoalListHeader from "@/components/GoalListHeader";
import { styled } from "styled-components";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { format } from "date-fns";

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

export default function GoalDetailCard({ goal, deleteGoal }) {
  const {
    goalName,
    specific,
    measurable,
    achievable,
    relevant,
    timely,
    timelyOption,
  } = goal;
  const router = useRouter();
  console.log("option", timelyOption);
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

  function formatTimelyDate(timely) {
    console.log(timely); // Add this line
    if (timelyOption === "date") {
      const date = new Date(timely);

      if (!isNaN(date.getTime())) {
        return format(date, "dd.MM.yyyy");
      }
    }
    return timely;
  }

  const formattedTimely = formatTimelyDate(timely);
  console.log(formattedTimely);

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
          <dd>{formattedTimely}</dd>
        </dl>
      </section>
      <StyledButton onClick={handleGoBack}>Back to my Goals</StyledButton>
      <StyledButton onClick={handleDelete}>Delete Goal</StyledButton>
    </>
  );
}
