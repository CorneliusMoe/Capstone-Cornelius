import { useState, useEffect, useRef } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

const MenuContainer = styled.div`
  position: relative;
  margin-left: auto;
  z-index: 1;
`;

const MenuList = styled.ul`
  position: absolute;
  top: ${({ $isOpen }) => ($isOpen ? "100%" : "-350px")};
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
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0%)" : "translateY(-100%)"};
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.9s ease
      forwards,
    ${({ $isOpen }) => ($isOpen ? fadeIn : "")} 1.1s ease forwards;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

  @media (min-width: 375px) and (max-width: 768px) {
    width: 100vw;
    height: 100vw;
    left: 0;
    border-radius: 0 0 5% 5%;
    border: none;
    font-size: 30px;
    margin-top: -1px;
    padding-top: 50px;
  }
`;

const MenuItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6096b4;
  color: #272727;
  border: 1px solid #fcfbf4;
  border-right: none;
  border-left: none;
  border-top: none;
  width: 100%;
  padding-left: 150px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (min-width: 375px) and (max-width: 768px) {
    padding-left: 0;
    border: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fcfbf4;
  font-size: inherit;
  cursor: pointer;
  z-index: 1;
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
            <StyledLink href="/create">Create</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="/goallist">My goals</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="/mindfulness">Exercises</StyledLink>
          </MenuItem>
        </MenuList>
      )}
    </MenuContainer>
  );
}
