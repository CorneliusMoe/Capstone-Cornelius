import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #93bfcf;
  padding: 20px;
  margin: 10px 10px 10px 10px;
  min-width: 350px;
  max-width: 350px;
  min-height: 254px;
  max-height: 300px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
