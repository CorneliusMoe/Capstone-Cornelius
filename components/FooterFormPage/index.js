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
  height: 48px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 5px;
`;

export default function FooterFormPage({ onBack }) {
  return (
    <FooterContainer>
      {" "}
      <IconButton onClick={onBack}>
        <SvgIcon variant="backArrow" color="#fcfbf4" />
      </IconButton>
      <IconButton type="submit" form="form1" value="Submit">
        <SvgIcon variant="contentSave" color="#fcfbf4" />
      </IconButton>
    </FooterContainer>
  );
}
