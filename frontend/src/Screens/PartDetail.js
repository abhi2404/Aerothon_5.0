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
          <img style={{ width: "500px" }} src={Engine} alt="Engine" />
        </ImageWrapper>
        <RightPart>
          <ol style={{ listStyleType: "square", color: "black" }}>
            <li>
              {" "}
              <b>Age: </b> {post.age}
            </li>
            <li>
              {" "}
              <b>Condition:</b> {post.condition}
            </li>
            <li>
              {" "}
              <b> Material Composition:</b> {post.material_composition}
            </li>
            <li>
              {" "}
              <b>Aircraft Model:</b> {post.aircraft_model}
            </li>
            <li>
              <b>Name: </b> {post.name}
            </li>
            <li>
              {" "}
              <b>location:</b> {post.location}
            </li>
          </ol>
        </RightPart>
      </Container>
      <GroupedBarChart data={post} />
    </Wrapper>
  );
};
export default PartDetail;
