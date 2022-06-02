import React from "react";
import { ScrollBtn } from "./styles/FormStyles";
import { Container, Page } from "./styles/LayoutStyles";
import {
  BlueSmallText,
  Heading,
  NextHeading,
  SmallText,
} from "./styles/TextStyles";

function Hero() {
  return (
    <Page name="about">
      <Container>
        <BlueSmallText>Hello there, my name is</BlueSmallText>
        <Heading>Silje Schoell</Heading>
        <NextHeading>I implement design to your webpage</NextHeading>
        <SmallText>
          I am a freshly graduated front-end developer, and currently looking
          for work. My skillset includes JavaScript, html, sass, TypeScript,
          React, Next. Have a look at my repos, and get in touch.
        </SmallText>
        <ScrollBtn to="contact" spy={true} smooth={true} duration={500}>
          Contact me
        </ScrollBtn>
      </Container>
    </Page>
  );
}

export default Hero;
