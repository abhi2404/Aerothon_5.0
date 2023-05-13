import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Engine from "./Engine.jpg";
import styled from "styled-components";
import GroupedBarChart from "../Components/GroupedBarChart";
const Wrapper = styled.div`
  padding-left: 50px;
  padding-top: 50px;
`;
const Container = styled.div`
  margin: 20px 20px;
  display: flex;
  margin-bottom: 50px;
`;

const RightPart = styled.div`
  margin: 20px 20px;
  font-size: 25px;
`;

const ImageWrapper = styled.div`
  width: 600px;
`;

const P = styled.p``;
const Button = styled.div`
margin-left: 30px;
  align-items: center;
  background-color: #0a66c2;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

  &:hover,
  &:focus {
    background-color: #16437e;
    color: #ffffff;
  }
`;

const PartDetail = () => {
  const location = useLocation();
  const { post } = location.state;
  return (
    <Wrapper>
      <Button>Place Order</Button>
      <Container>
        <ImageWrapper>
          <img style={{ width: "500px" }} src={Engine} alt='Engine' />
        </ImageWrapper>
        <RightPart>
          <h1>Age: {post.age}</h1>
          <h2>Condition: {post.condition}</h2>
          <h2>Material Composition: {post.material_composition}</h2>
          <h2>Aircraft Model: {post.aircraft_model}</h2>
          <h2>Name: {post.name}</h2>
        </RightPart>
      </Container>
      <GroupedBarChart data={post} />
    </Wrapper>
  );
};
export default PartDetail;
