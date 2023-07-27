import Link from "next/link";
import styled from "styled-components";
import Header from "@/components/Header";
import Quote from "@/components/Quote";

const HomeContainer = styled.main`
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
`;

const Introduction = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #272727;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  margin-top: 40px;
  background-color: #93bfcf;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: #272727;
  cursor: pointer;
`;

export default function HomePage() {
  return (
    <>
      <HomeContainer>
        <Header title="be S.M.A.R.T." />
        <Quote />
        <Introduction>
          SMART goals set you up for success by making goals specific,
          measurable, achievable, realistic, and timely. The SMART method helps
          push you further, gives you a sense of direction, and helps you
          organize and reach your goals.
        </Introduction>
        <StyledLink href="/create">Be S.M.A.R.T. today</StyledLink>
      </HomeContainer>
    </>
  );
}
