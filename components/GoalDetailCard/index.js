import { useRouter } from "next/router";
import { useState } from "react";
import GoalListHeader from "@/components/GoalListHeader";
import GoalInput from "@/components/GoalInput";
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

export default function GoalDetailCard({ goal, deleteGoal, updateGoal }) {
  const {
    goalName,
    specific,
    measurable,
    achievable,
    relevant,
    timely,
    timelyOption,
  } = goal;
  const [isEditing, setIsEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState(goal);
  const router = useRouter();

  function handleEdit() {
    setIsEditing(true);
  }

  function handleTimelyOptionChangeWrapper(value) {
    setEditedGoal((prevGoal) => ({
      ...prevGoal,
      timelyOption: value,
      timely: value === "text" ? "" : prevGoal.timely,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    updateGoal(editedGoal);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditedGoal(goal);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedGoal((prevGoal) => ({
      ...prevGoal,
      [name]: value,
    }));
  }

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
    if (timelyOption === "date") {
      const date = new Date(timely);

      if (!isNaN(date.getTime())) {
        return format(date, "dd.MM.yyyy");
      }
    }
    return timely;
  }

  const formattedTimely = formatTimelyDate(timely);

  return (
    <>
      <GoalListHeader />
      {isEditing ? (
        <form onSubmit={handleSave}>
          <GoalInput
            title="Be S.M.A.R.T."
            description="Choose a title for your goal"
            label="What should the title of my goal be?"
            name="goalName"
            value={editedGoal.goalName}
            onChange={handleInputChange}
            required
          />
          <GoalInput
            title="Specific"
            description="Specific goals make it harder to get stuck and easier to get started.
        Review this section if you feel yourself getting off track. Be clear
        about what your goal is. You know what to do!"
            label="What is my goal?"
            name="specific"
            value={editedGoal.specific}
            onChange={handleInputChange}
            required
          />
          <GoalInput
            title="Measurable"
            description="Measurable goals show you where you're going and how to track
              your progress. Ask yourself what can improve your mental wellbeing and
              how much of that thing you need before your wellbeing improves."
            label="How will I measure my progress?"
            name="measurable"
            value={editedGoal.measurable}
            onChange={handleInputChange}
            required
          />
          <GoalInput
            title="Achievable"
            description="Achievable goals ensure that you don't push yourself too hard or
               try to achieve something out of your control. Break up your larger
               goals into smaller ones. Once you know you can do it you're
               halfway there."
            label="Can I achieve my goal?"
            name="achievable"
            value={editedGoal.achievable}
            onChange={handleInputChange}
            required
          />
          <GoalInput
            title="Relevant"
            description=" Relevant goals are important both now and later. They allow you to
              succeed while staying true to your values and will help you meet more
              long-term goals."
            label="Why is this goal important to me?"
            name="relevant"
            value={editedGoal.relevant}
            onChange={handleInputChange}
            required
          />
          <GoalInput
            title="Timely"
            description="Timely goals are well-structured with a beginning and end-date. Try
              not to be vague about the time in which you should achieve your goal.
              Be specific, this keeps you accountable and focused."
            label="When will I achieve my goal?"
            name="timely"
            value={editedGoal.timely}
            onChange={handleInputChange}
            timelyOption={editedGoal.timelyOption}
            setTimelyOption={handleTimelyOptionChangeWrapper}
            required
          />
          <button type="submit">Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </form>
      ) : (
        <>
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
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
    </>
  );
}
