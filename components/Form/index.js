import { useRouter } from "next/router";
import { useState } from "react";
import GoalInput from "@/components/GoalInput/index";
import { Card } from "../FormCard";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Form({ addGoal, timelyOption, setTimelyOption }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    goalName: "",
    specific: "",
    measurable: "",
    achievable: "",
    relevant: "",
    timely: "",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Use formData object directly, no need to create FormData object
    addGoal(formData);
    router.push("/goallist");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Card>
        <GoalInput
          title="Be S.M.A.R.T."
          description="Choose a title for your goal"
          label="What name should my goal have?"
          name="goalName"
          value={formData.goalName}
          onChange={handleFormChange}
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
          value={formData.specific}
          onChange={handleFormChange}
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
          value={formData.measurable}
          onChange={handleFormChange}
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
          value={formData.achievable}
          onChange={handleFormChange}
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
          value={formData.relevant}
          onChange={handleFormChange}
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
          timelyOption={timelyOption}
          setTimelyOption={setTimelyOption}
          value={formData.timely}
          onChange={handleFormChange}
        />
      </Card>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
