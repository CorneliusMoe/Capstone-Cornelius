import React from "react";
import { useRouter } from "next/router";
import GoalListHeader from "@/components/GoalListHeader";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }

  &:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function GoalDetailCard({ goal }) {
  const { goalName, specific, measurable, achievable, relevant, timely } = goal;
  const router = useRouter();

  function handleGoBack() {
    router.push("/goallist");
  }

  return (
    <>
      <GoalListHeader />
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
      <StyledButton onClick={handleGoBack}>Back to my Goals</StyledButton>
    </>
  );
}
