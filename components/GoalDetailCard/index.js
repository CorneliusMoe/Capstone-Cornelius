import { useRouter } from "next/router";
import { useState } from "react";
import Header from "@/components/Header";
import GoalInput from "@/components/GoalInput";
import Card from "@/components/FormCard";
import GoalDetailFooter from "@/components/GoalDetailFooter";
import styled from "styled-components";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { format } from "date-fns";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;
  min-height: 100vh;
`;

const StyledGoalDetailWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
`;

const StyledHeadline = styled.h2`
  font-size: 24px;
  color: #272727;
  background-color: #eee9da;
`;

const StyledDescriptionList = styled.dl`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 700px;
  max-width: 800px;
  height: 40px;
  background-color: #6096b4;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 280px;
    max-width: 800px;
    height: 40px;
    background-color: #6096b4;
  }
`;

const StyledDescription = styled.dt`
  background-color: #6096b4;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fcfbf4;
  align-items: center;
`;

const StyledDescribedItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background-color: #eee9da;
`;

const StyledDescribedItem = styled.dd`
  background-color: #eee9da;
  margin: 10px 0 10px 0;
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

  function handleTimelyOptionChangeWrapper(value) {
    setEditedGoal((prevGoal) => ({
      ...prevGoal,
      timelyOption: value,
      timely: value === "text" ? "" : prevGoal.timely,
    }));
  }

  function handleEdit() {
    setIsEditing(true);
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
      <Header title="my goal" />
      {isEditing ? (
        <StyledForm id="form1" onSubmit={handleSave}>
          <Card>
            <GoalInput
              title="Be S.M.A.R.T."
              description="Choose a title for your goal"
              label="What should the title of my goal be?"
              name="goalName"
              value={editedGoal.goalName}
              onChange={handleInputChange}
              required
            />
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <GoalDetailFooter onCancel={handleCancelEdit} isEditing={isEditing} />
        </StyledForm>
      ) : (
        <StyledGoalDetailWrapper>
          <StyledHeadline>{goalName}</StyledHeadline>
          <StyledDescriptionList>
            <StyledDescriptionContainer>
              <StyledDescription>Specific</StyledDescription>
            </StyledDescriptionContainer>
            <StyledDescribedItemContainer>
              <StyledDescribedItem>{specific}</StyledDescribedItem>
            </StyledDescribedItemContainer>
            <StyledDescriptionContainer>
              <StyledDescription>Measurable</StyledDescription>
            </StyledDescriptionContainer>
            <StyledDescribedItemContainer>
              <StyledDescribedItem>{measurable}</StyledDescribedItem>
            </StyledDescribedItemContainer>
            <StyledDescriptionContainer>
              <StyledDescription>Achievable</StyledDescription>
            </StyledDescriptionContainer>
            <StyledDescribedItemContainer>
              <StyledDescribedItem>{achievable}</StyledDescribedItem>
            </StyledDescribedItemContainer>
            <StyledDescriptionContainer>
              <StyledDescription>Relevant</StyledDescription>
            </StyledDescriptionContainer>
            <StyledDescribedItemContainer>
              <StyledDescribedItem>{relevant}</StyledDescribedItem>
            </StyledDescribedItemContainer>
            <StyledDescriptionContainer>
              <StyledDescription>Timely</StyledDescription>
            </StyledDescriptionContainer>
            <StyledDescribedItemContainer>
              <StyledDescribedItem>{formattedTimely}</StyledDescribedItem>
            </StyledDescribedItemContainer>
          </StyledDescriptionList>

          <GoalDetailFooter
            onBack={handleGoBack}
            onDelete={handleDelete}
            onEdit={handleEdit}
            isEditing={isEditing}
          />
        </StyledGoalDetailWrapper>
      )}
    </>
  );
}
