import Link from "next/link";
import styled from "styled-components";
import SvgIcon from "../Icons";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #6096b4;
  padding: 10px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 5px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="/">
        <IconButton>
          <SvgIcon variant="backArrow" color="#fcfbf4" />
        </IconButton>
      </Link>
    </FooterContainer>
  );
}
