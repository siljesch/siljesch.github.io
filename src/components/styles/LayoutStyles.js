import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectPage = styled(Page)`
  @media (max-width: 768px) {
    height: fit-content;
  }
`;

export const Container = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Card = styled.div`
  border: solid 2px #00cbff;
  height: 55%;
  width: 30%;
  background: rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    height: 35%;
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

export const CardText = styled.div`
  padding: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}
#root {
    background: linear-gradient(#183128, #006958);  
    height: 100%;
    margin: 0;
}  
a{
  text-decoration: none;
}
a:hover{
  color: #00cbff;
}
`;
