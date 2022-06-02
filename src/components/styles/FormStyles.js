import Link from "react-scroll/modules/components/Link";
import styled from "styled-components";

export const ScrollBtn = styled(Link)`
  border: solid 2px #00cbff;
  background: transparent;
  color: #00cbff;
  font-size: 1rem;
  padding: 0.5rem 2rem 0.5rem 2rem;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  color: #00c9bc;
`;

export const FormInput = styled.input`
  border: solid 2px #00cbff;
  height: 1.5rem;
  margin-bottom: 1rem;
  background: rgba(1000, 1000, 1000, 0.2);
`;

export const FormTextInput = styled.textarea`
  border: solid 2px #00cbff;
  margin-bottom: 2rem;
  background: rgba(1000, 1000, 1000, 0.2);
`;

export const SubmitBtn = styled.button`
  border: solid 2px #00cbff;
  background: transparent;
  color: #00cbff;
  font-size: 1rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  width: 10rem;
`;
