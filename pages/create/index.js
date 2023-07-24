import Form from "@/components/Form";
import Header from "@/components/Header";

export default function FormPage({ addGoal, timelyOption, setTimelyOption }) {
  function handleAddGoal(goalData) {
    addGoal(goalData);
  }

  return (
    <>
      <Header title="create" />
      <Form
        addGoal={handleAddGoal}
        timelyOption={timelyOption}
        setTimelyOption={setTimelyOption}
      />
    </>
  );
}
