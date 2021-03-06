import styled from "styled-components";

export const Heading = styled.h1`
  color: #00ffd4;
  font-size: 4rem;
  margin: 0.5rem 0 0 0;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const NextHeading = styled.h2`
  color: #00c9bc;
  font-size: 3rem;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ThirdHeading = styled.h3`
  color: #00c9bc;
  font-size: 1.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SmallText = styled.p`
  color: #00c9bc;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const BlueSmallText = styled(SmallText)`
  color: #00cbff;
`;

export const BlueLinkSmallText = styled(SmallText)`
  color: #00cbff;
  cursor: pointer;
`;

export const SmallerText = styled(SmallText)`
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const LinkText = styled.a`
  color: #00cbff;
  font-size: 1rem;
  text-decoration: underline;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
