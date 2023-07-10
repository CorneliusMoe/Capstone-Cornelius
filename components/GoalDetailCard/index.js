import React from "react";
import Link from "next/link";

export default function GoalDetailCard({ goal }) {
  const { goalName, specific, measurable, achievable, relevant, timely } = goal;

  return (
    <>
      <section>
        <h2>{goalName}</h2>
        <dl>
          <dt>Specific</dt>
          <dd>{specific}</dd>
          <dt>Mesaurable</dt>
          <dd>{measurable}</dd>
          <dt>Achievable</dt>
          <dd>{achievable}</dd>
          <dt>Relevant</dt>
          <dd>{relevant}</dd>
          <dt>Timely</dt>
          <dd>{timely}</dd>
        </dl>
      </section>
      <Link href="/goallist">Back to my Goals</Link>
    </>
  );
}
