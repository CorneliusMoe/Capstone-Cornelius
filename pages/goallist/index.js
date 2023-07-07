import Link from "next/link";
import React from "react";
import GoalCard from "../../components/GoalCard/index";
import { goals } from "../../lib/data";

export default function GoalList() {
  return (
    <div>
      <h2>my goals</h2>
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
      <Link href="/">Back to Homepage</Link>
    </div>
  );
}
