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

const PartDetail = () => {
  const location = useLocation();
  const { post } = location.state;

  console.log(post, " thsis is ");
  return (
    <Wrapper>
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
