import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Engine from "./Engine.jpg";
import styled from "styled-components";
import api_url from "../Config/Config";
import axios from "axios";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
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
  let history = useHistory();
  const alert = useAlert();
  const location = useLocation();
  const { post } = location.state;

  const handleOrder = (e) => {
    const formData = new FormData();
    formData.append("id", e.id);
    console.log(post);
    axios
      .post(`${api_url}api/aircrafts/buy_parts/`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert.success("Order Placed");
          const token = res.data.access;
          localStorage.setItem("token", token);
          history.push("/");
        } else {
          alert.error("Some Error Occured");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert.error(err.message);
        console.log(err);
      });
  };
  return (
    <Wrapper>
      <Button onClick={() => handleOrder(post)}>Place Order</Button>
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
