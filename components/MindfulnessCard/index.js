import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const StyledCard = styled.section`
  min-width: 250px;
  max-width: 350px;
  min-height: 254px;
  max-height: 350px;
  border-radius: 30px;
  background: #93bfcf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 16px;
`;

const StyledTitle = styled.h2`
  color: #272727;
  border-bottom: 3px solid #eee9da;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledParagraph = styled.p`
  color: #272727;
  font-size: 19px;
`;

const StyledCategory = styled.p`
  color: #7d7d7d;
  font-size: 15px;
  margin-top: 8px;
`;

export default function MindfulnessCard({ title, description, category }) {
  return (
    <CardsContainer>
      <StyledCard>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{description}</StyledParagraph>
        <StyledCategory>{category}</StyledCategory>
      </StyledCard>
    </CardsContainer>
  );
}
