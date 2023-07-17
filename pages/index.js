import Link from "next/link";
import { styled } from "styled-components";

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default function HomePage() {
  return (
    <>
      <h1>Homepage Placeholder</h1>
      <LinksContainer>
        <Link href="/goallist">my Goals</Link>
        <Link href="/formpage">Form</Link>
      </LinksContainer>
    </>
  );
}
