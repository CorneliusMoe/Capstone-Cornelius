import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #93bfcf;
  padding: 20px;
  margin: 10px 10px 10px 10px;
  min-width: 350px;
  max-width: 350px;
  min-height: 233px;
  max-height: 500px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}
