import React from "react";
import { useRouter } from "next/router";
import { goals } from "@/lib/data";
import GoalDetailCard from "@/components/GoalDetailCard";

export default function GoalDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const goal = goals.find((goal) => goal.id === id);

  if (!goal) {
    return <div>Goal not found.</div>;
  }

  return <GoalDetailCard goal={goal} />;
}
