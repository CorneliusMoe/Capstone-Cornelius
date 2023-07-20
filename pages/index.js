import Link from "next/link";
import { styled } from "styled-components";
import HomepageHeader from "@/components/HomepageHeader";

const HomeContainer = styled.main`
  text-align: center;
  margin: 0 auto;
`;

const Introduction = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function HomePage() {
  return (
    <>
      <HomeContainer>
        <HomepageHeader />
        <Introduction>
          SMART goals set you up for success by making goals specific,
          measurable, achievable, realistic, and timely. The SMART method helps
          push you further, gives you a sense of direction, and helps you
          organize and reach your goals.
        </Introduction>
        <Link href="/formpage">
          <HomeButton>Be S.M.A.R.T. today</HomeButton>
        </Link>{" "}
        <Link href="/goallist">
          <HomeButton>my Goals</HomeButton>
        </Link>
      </HomeContainer>
    </>
  );
}
