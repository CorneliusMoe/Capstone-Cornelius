import { HeaderBar, Headline } from "./Header.style";

export default function Header({ title }) {
  return (
    <HeaderBar>
      <Headline>{title}</Headline>
    </HeaderBar>
  );
}
