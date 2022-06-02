import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 60%;
`;

export const CardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  border: solid 2px #00cbff;
  height: 400px;
  width: 30%;
`;

export const GlobalStyle = createGlobalStyle`
#root {
    background: linear-gradient(#183128, #006958);  
height: 100%;
}  
`;
