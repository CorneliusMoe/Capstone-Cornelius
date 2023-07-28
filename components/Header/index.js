import BurgerMenu from "../BurgerMenu";
import styled from "styled-components";

const HeaderBar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #6096b4;
  display: flex;
  z-index: 2;
`;

const Headline = styled.h1`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0px;
  color: #fcfbf4;
  flex: 1;
  margin-right: auto;
  text-indent: -48px;
  z-index: 2;
`;

export default function Header({ title }) {
  return (
    <HeaderBar>
      <BurgerMenu />
      <Headline>{title}</Headline>
    </HeaderBar>
  );
}
