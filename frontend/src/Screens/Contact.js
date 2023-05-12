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

const Content = styled.p`
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactName = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 10px;
`;

const ContactLink = styled.a`
  color: #4285f4;
`;

const ContactUs = () => {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Content>
        We appreciate your interest in reaching out to us. If you have any questions, suggestions, or inquiries related to the Circular Economy Models for Aircraft Materials Dashboard, please feel free to get in touch with us using the contact details below.
      </Content>
      <ContactItem>
        <ContactName>Manas Khare:</ContactName>
        <ContactLink href="https://www.linkedin.com/in/manas-20" target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </ContactLink>
      </ContactItem>
      <ContactItem>
        <ContactName>Sahil Jain:</ContactName>
        <ContactLink href="https://www.linkedin.com/in/jainss" target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </ContactLink>
      </ContactItem>
      <ContactItem>
        <ContactName>Abhishek Singh:</ContactName>
        <ContactLink href="https://www.linkedin.com/in/singh-abhi-shek/" target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </ContactLink>
      </ContactItem>
      <Content>
        We look forward to hearing from you and will respond to your inquiries as soon as possible. Thank you for your support and interest in our work!
      </Content>
    </Container>
  );
};

export default ContactUs;
