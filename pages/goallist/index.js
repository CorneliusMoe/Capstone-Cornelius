import Link from "next/link";
import React from "react";
import GoalCard from "../../components/GoalCard/index";
import { goals } from "../../lib/data";
import GoalListHeader from "@/components/GoalListHeader";

export default function GoalList() {
  return (
    <div>
      <GoalListHeader />
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
      <Link href="/">Back to Homepage</Link>
    </div>
  );
}
