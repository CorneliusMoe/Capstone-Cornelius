import { HeaderBar, Headline } from "./Header.styled";
import BurgerMenu from "../BurgerMenu";

export default function Header({ title }) {
  return (
    <HeaderBar>
      <BurgerMenu />
      <Headline>{title}</Headline>
    </HeaderBar>
  );
}
