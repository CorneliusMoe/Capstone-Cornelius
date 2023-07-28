import Form from "@/components/Form";
import Header from "@/components/Header";
import FooterFormPage from "@/components/FooterFormPage";
import { useRouter } from "next/router";

export default function FormPage({ addGoal, timelyOption, setTimelyOption }) {
  const router = useRouter();

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
      <FooterFormPage onBack={() => router.push("/")} />
    </>
  );
}
