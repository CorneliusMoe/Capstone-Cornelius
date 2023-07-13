import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";

export default function FormPage({ addGoal }) {
  function handleAddGoal(goalData) {
    addGoal(goalData);
  }

  return (
    <>
      <FormHeader />
      <Form addGoal={handleAddGoal} />
    </>
  );
}
