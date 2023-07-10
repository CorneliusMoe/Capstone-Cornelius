import Link from "next/link";
import React from "react";
import GoalCard from "../../components/GoalCard/index";
import { goals } from "../../lib/data";
import GoalListHeader from "@/components/GoalListHeader";
import { useRouter } from "next/router";

export default function GoalList() {
  const router = useRouter();

  function handleGoalClick(id) {
    router.push(`/goal/${id}`);
  }

  return (
    <div>
      <GoalListHeader />
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onGoalClick={handleGoalClick} />
      ))}
      <Link href="/">Back to Homepage</Link>
    </div>
  );
}
