import { useRouter } from "next/router";
import GoalDetailCard from "@/components/GoalDetailCard";

export default function GoalDetailPage({ goals, deleteGoal }) {
  const router = useRouter();
  const { id } = router.query;

  const goal = goals.find((goal) => goal.id === id);

  if (!goal) {
    return <div>Goal not found.</div>;
  }

  return <GoalDetailCard goal={goal} deleteGoal={deleteGoal} />;
}
