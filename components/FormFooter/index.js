import styled from "styled-components";
import SvgIcon from "../Icons";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
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
