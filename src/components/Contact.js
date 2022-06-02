import React from "react";
import {
  Form,
  FormInput,
  FormLabel,
  FormTextInput,
  SubmitBtn,
} from "./styles/FormStyles";
import { Container, Page } from "./styles/LayoutStyles";
import { NextHeading } from "./styles/TextStyles";

function Contact() {
  return (
    <Page name="contact">
      <Container>
        <NextHeading>Get in touch</NextHeading>
        <Form>
          <FormLabel>Email</FormLabel>
          <FormInput />

          <FormLabel>Subject</FormLabel>
          <FormInput />

          <FormLabel>Message</FormLabel>
          <FormTextInput rows={"10"} />

          <SubmitBtn>Send</SubmitBtn>
        </Form>
      </Container>
    </Page>
  );
}

export default Contact;
