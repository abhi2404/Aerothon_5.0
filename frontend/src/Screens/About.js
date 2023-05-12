import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;
  padding-left: 100px;
  padding-right: 100px;
`;

const Heading = styled.h2`
  text-align: center;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
      <Paragraph>
        The Circular Economy Models for Aircraft Materials Dashboard provides a
        comprehensive overview of key metrics and data related to the recycling
        and repurposing of end-of-life aircraft components. It aims to support
        sustainable practices in the aviation industry by promoting the
        circular economy principles and reducing waste.
      </Paragraph>
      <Paragraph>
        The dashboard presents valuable information and insights on the
        recycling and repurposing processes of various aircraft materials,
        including metals, composites, and plastics. It showcases the efforts
        taken by recycling facilities, manufacturers, and other stakeholders to
        extend the lifespan of aircraft components, minimize environmental
        impact, and optimize resource utilization.
      </Paragraph>
      <Paragraph>
        Through the dashboard, users can explore key performance indicators,
        such as recycling rates, repurposing success rates, and material
        recovery percentages. It offers visualizations, charts, and graphs to
        present data in an easily understandable and actionable format,
        facilitating informed decision-making and promoting sustainable
        practices within the aviation industry.
      </Paragraph>
      <Paragraph>
        The Circular Economy Models for Aircraft Materials Dashboard is an
        essential tool for industry professionals, policymakers, researchers,
        and stakeholders interested in advancing sustainable practices in the
        aviation sector. It serves as a centralized platform for accessing
        up-to-date information, best practices, and case studies related to
        aircraft material recycling and repurposing, fostering collaboration
        and knowledge sharing in the pursuit of a greener and more sustainable
        aviation industry.
      </Paragraph>
    </Container>
  );
};

export default About;
