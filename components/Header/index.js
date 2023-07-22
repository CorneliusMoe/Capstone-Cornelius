import { HeaderBar, Headline } from "./Header.style";
import BurgerMenu from "../BurgerMenu";

export default function Header({ title }) {
  return (
    <HeaderBar>
      <BurgerMenu />
      <Headline>{title}</Headline>
    </HeaderBar>
  );
}
