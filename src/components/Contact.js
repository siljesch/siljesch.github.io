import React, { useState } from "react";
import {
  Form,
  FormInput,
  FormLabel,
  FormTextInput,
  SubmitBtn,
} from "./styles/FormStyles";
import { Container, Page } from "./styles/LayoutStyles";
import {
  BlueLinkSmallText,
  NextHeading,
  SmallText,
  ThirdHeading,
} from "./styles/TextStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../utils/Schema";
import axios from "axios";
import { CONTACT_URL } from "../utils/api";
import { useToggle } from "../hooks/useToggle";

function Contact() {
  const [error, setError] = useState();
  const [toggle, setToggle] = useToggle();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const sendContact = async (formData) => {
    const options = {
      data: {
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    };
    const responseData = await axios.post(CONTACT_URL, options);
    console.log(responseData);
    setToggle();
  };

  const onSubmit = (formData) => {
    sendContact(formData).catch((error) => setError(error));
  };

  const sendAnother = (e) => {
    e.preventDefault();
    setToggle();
  };

  if (error) {
    return (
      <Page name="projects">
        <ThirdHeading>I'm sorry, something went wrong</ThirdHeading>
        <SmallText>{error.message}</SmallText>
      </Page>
    );
  }

  return (
    <Page name="contact">
      <Container>
        <NextHeading>Get in touch</NextHeading>
        {toggle ? (
          <div>
            <ThirdHeading>
              Thank you for your message! I will get back to you as soon as
              possible.
            </ThirdHeading>
            <BlueLinkSmallText onClick={sendAnother}>
              Send another message
            </BlueLinkSmallText>
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Email</FormLabel>
            <FormInput {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <FormLabel>Subject</FormLabel>
            <FormInput {...register("subject")} />
            {errors.subject && <span>{errors.subject.message}</span>}

            <FormLabel>Message</FormLabel>
            <FormTextInput rows={"10"} {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <SubmitBtn>Send</SubmitBtn>
          </Form>
        )}
      </Container>
    </Page>
  );
}

export default Contact;
