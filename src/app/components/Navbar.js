import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Root = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #363636;
  padding: 0 12px;
  height: 3.25rem;
  color: white;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialLink = styled.a.attrs({ target: "_blank", rel: "noreferrer" })`
  display: flex;
`;

const SocialImage = styled.img`
  width: 20px;
  margin: 0 0 0 10px;
`;

const Navbar = () => {
  return (
    <Root>
      <Link to="/">❄️ ☀️ Homepage ☀️ ❄️</Link>
      <IconsWrapper>
        App in one day project - by Daria
        <SocialLink href="https://twitter.com/dariakafler">
          <SocialImage src="./iconmonstr-twitter-1-32.png" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/dariakafler/">
          <SocialImage src="./iconmonstr-linkedin-3-32.png" />
        </SocialLink>
        <SocialLink href="https://github.com/daria-kafler">
          <SocialImage src="./iconmonstr-github-1-32.png" />
        </SocialLink>
      </IconsWrapper>
    </Root>
  );
};
export default Navbar;
