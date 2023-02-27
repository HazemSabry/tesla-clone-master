import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { selectSections } from "../features/car/carSlice";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const sections = useSelector(selectSections);
  console.log(cars);
  return (
    <Container>
      <a href="#HomeHome">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car) => (
            <a key={car} href="#Home">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#Home">Shop</a>
        <a href="#Home">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <ul>
          {cars &&
            cars.map((car) => (
              <li>
                <a key={car} href="#Home">
                  {car}
                </a>
              </li>
            ))}

          {sections &&
            sections.map((sections) => (
              <li>
                <a key={sections} href="">
                  {sections}
                </a>
              </li>
            ))}
        </ul>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.ul`
  position: fixed;
  top: 0px;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  ul {
    margin-top: 30px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 16px;
  }
  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 5px;
    padding: 6px 20px;
    a {
      color: rgb(57, 60, 65);
      text-decoration: none;
    }
    :hover {
      background-color: rgba(166, 166, 166, 0.15);
      color: white;
      border-radius: 10px;
    }
  }
  cursor: pointer;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
`;
const CustomClose = styled(CloseIcon)``;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
