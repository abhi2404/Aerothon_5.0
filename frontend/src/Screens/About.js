import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding-top: 40px;
`;
const Heading = styled.h2`
  text-align: center;
`;
const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
    </Container>
  );
};

export default About;
