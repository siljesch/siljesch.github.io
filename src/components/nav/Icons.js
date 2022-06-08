import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContainer, IconLink, TopMenu } from "./NavStyles";

function Icons() {
  return (
    <TopMenu>
      <IconContainer>
        <IconLink
          href="https://www.linkedin.com/in/silje-sch%C3%B8ll-897ab0158/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://github.com/siljesch"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </IconLink>
      </IconContainer>
    </TopMenu>
  );
}

export default Icons;
