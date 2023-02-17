import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Fonts.css";

const Header = () => {
  const [height, onHoverHeight] = useState("80px");

  return (
    <StyledHeader height={height}>
      <Inner>
        <Logo to="/">
          <img src="img/logo.png" alt="logo" />
        </Logo>
        <NavBar>
          <Ul
            onMouseOver={() => onHoverHeight("100%")}
            onMouseOut={() => onHoverHeight("80px")}
          >
            <li>
              <MainMenu to="/그룹소개">
                <span>그룹소개</span>
              </MainMenu>
              <Dropdown>
                <li>인사말</li>
                <li>대표이사 소개</li>
              </Dropdown>
            </li>
            <li>
              <MainMenu to="/기사모집">
                <span>기사모집</span>
              </MainMenu>
              <Dropdown>
                <li>입사절차</li>
                <li>입사서류</li>
                <li>찾아오는 길</li>
              </Dropdown>
            </li>
            <li>
              <MainMenu to="/하이택시">
                <span>하이택시</span>
              </MainMenu>
              <Dropdown>
                <li>업체정보</li>
              </Dropdown>
            </li>
            <li>
              <MainMenu to="/다연상운">
                <span>다연상운</span>
              </MainMenu>
              <Dropdown>
                <li>업체정보</li>
              </Dropdown>
            </li>
            <li>
              <MainMenu to="/고객마당">
                <span>고객마당</span>
              </MainMenu>
              <Dropdown>
                <li>공지사항</li>
                <li>민원접수</li>
                <li>분실물</li>
              </Dropdown>
            </li>
          </Ul>
        </NavBar>
      </Inner>
      <Test></Test>
      <Test2></Test2>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: ${(props) => props.height || "80px"};
  background-color: #fff;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transition: 0.5s;
  border-bottom: 1px solid #838c91;
  z-index: 10;
  font-family: "Noto Sans", sans-serif;
`;

const Logo = styled(Link)`
  z-index: 2;
  img {
    height: 80px;
  }
`;

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const NavBar = styled.nav`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 400px;
`;

const Ul = styled.ul`
  display: flex;
  li {
    list-style: none;
  }
  > li:hover span::after {
    width: 100%;
  }
`;

const MainMenu = styled(Link)`
  display: flex;
  text-decoration: inherit;
  color: inherit;
  color: #838c91;
  height: 80px;
  width: 160px;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #004a95;
  }
  span {
    position: relative;
  }
  span::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -14px;
    width: 0;
    height: 2px;
    background-color: #004a95;
    transition: 0.5s;
  }
  font-weight: 700;
  font-size: 20px;
  transition: 0.5s;
`;

const Dropdown = styled.ul`
  display: block;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  color: #676d70;
  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
  }
`;

const Test = styled.div`
  width: 100%;
  height: 130px;
  z-index: 1;
  background-color: #fff;
  position: absolute;
  top: 80px;
  left: 0;
  border-top: 1px solid #838c91;
`;

const Test2 = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: black;
  position: absolute;
  top: 210px;
  left: 0;
  opacity: 0.2;
`;

export default Header;
