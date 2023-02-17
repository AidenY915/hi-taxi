import styled from "styled-components";

const Footer = () => {
  return <StyledFooter>푸터입니다.</StyledFooter>;
};

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: gray;
`;

export default Footer;
