import GoalInput from "@/components/GoalInput/index";

export default function Form() {
  return (
    <form>
      <GoalInput
        title="Be S.M.A.R.T."
        description="Choose a title for your goal"
        label="What am I trying to achieve"
      />{" "}
      <GoalInput
        title="Specific"
        description="Specific goals make it harder to get stuck and easier to get started.
  Review this section if you feel yourself getting off track. Be clear
  about what your goal is. You know what to do!"
        label="What is my goal?"
      />{" "}
      <GoalInput
        title="Measurable"
        description="Measurable goals show you where you're going and how to track
        your progress. Ask yourself what can improve your mental wellbeing and
        how much of that thing you need before your wellbeing improves."
        label="How will I measure my progress?"
      />{" "}
      <GoalInput
        title="Achievable"
        description="Achievable goals ensure that you don't push yourself too hard or
        try to achieve something out of your control. Break up your larger
        goals into smaller ones. Once you know you can do it you're
        halfway there."
        label="Can I achieve my goal?"
      />{" "}
      <GoalInput
        title="Relevant"
        description=" Relevant goals are important both now and later. They allow you to
        succeed while staying true to your values and will help you meet more
        long-term goals."
        label="Why is this goal important to me?"
      />{" "}
      <GoalInput
        title="Timely"
        description="Timely goals are well-structured with a beginning and end-date. Try
        not to be vague about the time in which you should achieve your goal.
        Be specific, this keeps you accountable and focused."
        label="When will I achieve my goal?"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
