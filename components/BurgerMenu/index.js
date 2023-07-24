import { useState, useEffect, useRef } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import styled from "styled-components";

const MenuContainer = styled.div`
  position: relative;
  z-index: 3;
  margin-left: auto;
`;

const MenuList = styled.ul`
  position: absolute;
  left: -150px;
  background-color: #6096b4;
  border: 1px solid #ccc;
  border-top: none;
  list-style: none;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 50% 0;
  height: 350px;
  width: 300px;
  padding-left: 0;
`;

const MenuItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdcdd6;
  color: #272727;
  border: 1px solid #fcfbf4;
  border-right: none;
  border-left: none;
  border-top: none;
  width: 100%;
  padding-left: 150px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        const hamburgerIcon = document.querySelector(
          '[aria-label="Show menu"]'
        );
        if (!hamburgerIcon || !hamburgerIcon.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <MenuContainer>
      <Hamburger
        label="Show menu"
        toggled={isMenuOpen}
        toggle={handleMenuToggle}
        size={30}
        color="#fcfbf4"
      />
      {isMenuOpen && (
        <MenuList $isOpen={isMenuOpen} ref={menuRef}>
          <MenuItem>
            <StyledLink href="/">Home</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="/formpage">FormPage</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="/goallist">GoalList</StyledLink>
          </MenuItem>
        </MenuList>
      )}
    </MenuContainer>
  );
}
