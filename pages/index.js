import Link from "next/link";
import styled from "styled-components";
import Header from "@/components/Header";
import Quote from "@/components/Quote";

const HomeContainer = styled.main`
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Introduction = styled.p`
  font-size: 18px;
  max-width: 780px;
  margin: 20px auto;
  color: #272727;
`;

const ListContainer = styled.section`
  max-width: 780px;
  margin: 0 auto 40px;
  text-align: left;
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 20px;
`;

const ListHeader = styled.h2`
  font-size: 24px;
  color: #272727;
  margin-bottom: 10px;
  text-align: center;
`;

const ListItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  position: relative;
  padding-left: 30px;

  &::before {
    content: "💭";
    color: #6096b4;
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 10px;
  }
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background-color: #6096b4;
  color: #fcfbf4;
  text-decoration: none;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #93bfcf;
  }
`;

export default function HomePage() {
  return (
    <HomeContainer>
      <Header title="be S.M.A.R.T." />
      <Quote />
      <Introduction>
        Welcome to be S.M.A.R.T., your pathway to success! The SMART
        goal-setting method, combined with mindfulness practices, empowers you
        to create a harmonious life and achieve your dreams. By setting SMART
        goals, you&apos;ll enhance your motivation and gain a sense of purpose
        that aligns with your values and overall well-being.
      </Introduction>
      <ListContainer>
        <ListHeader>Why set SMART goals?</ListHeader>
        <StyledList>
          <ListItem>Specific goals provide clarity and focus.</ListItem>
          <ListItem>
            Measurable goals enable you to track progress with a non-judgmental
            mindset.{" "}
          </ListItem>
          <ListItem>Achievable goals challenge and motivate you.</ListItem>
          <ListItem>Realistic goals are within your reach.</ListItem>
          <ListItem>
            Timely goals anchor you in the now while nurturing a vision for the
            future.
          </ListItem>
        </StyledList>
      </ListContainer>

      <StyledLink href="/create">Start being S.M.A.R.T. today</StyledLink>
    </HomeContainer>
  );
}
