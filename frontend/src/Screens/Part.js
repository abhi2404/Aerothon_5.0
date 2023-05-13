import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api_url from "../Config/Config";
import { useAlert } from "react-alert";
import axios from "axios";
import Pagination from "../Components/Pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled.div`
  padding-top: 40px;
`;
const Heading = styled.h2`
  font-size: 50px;
  text-align: center;

  color: #379431;
  font-weight: bold;
`;
const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100rem;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

const CircularBar = styled.div`
  width: 100px;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const RightSide = styled.div`
  display: flex;
  align-item: center;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 12px;
`;

const LeftWrapper = styled.div`
  display: flex;
`;
const P = styled.p``;
const Post = styled.div`
  // color: black;

  background-color: #e3eef1;
  border: 1px solid black;
  margin: 1rem;
  width: 350px;
  padding: 10px;
  border-radius: 14px;
  box-shadow: 5px 10px grey;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  appearance: button;
  backface-visibility: hidden;
  background-image: linear-gradient(to right, #1e284b, #0f3653, #416342);
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
`;

const Part = () => {
  const location = useLocation();
  const { title } = location.state;
  const alert = useAlert();
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(10);
  const [posts, setPosts] = useState([]);
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setPage(pageNumber);
  };
  useEffect(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${api_url}api/aircrafts/get_data/?name=Engine&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        setTotalPosts(res.data.count);
        setPosts(res.data.results);
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Container>
      <Heading>{title}</Heading>
      <Posts>
        {posts.map((post, index) => {
          return (
            <Post>
              <LeftWrapper>
                <div>
                  <P
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Age: {post.age}
                  </P>
                  <P style={{ fontSize: "13px", fontWeight: "bold" }}>
                    Aircraft Mode: {post.aircraft_model}
                  </P>
                  <P style={{ fontSize: "13px", fontWeight: "bold" }}>
                    Condition: {post.condition}
                  </P>
                  <P style={{ fontSize: "13px", fontWeight: "bold" }}>
                    Name: {post.name}
                  </P>
                  <P style={{ fontSize: "13px", fontWeight: "bold" }}>
                    Manufacturer : {post.manufacturer}
                  </P>
                </div>
                <RightSide>
                  <CircularBar>
                    <CircularProgressWithLabel
                      value={post.remanufacturing_potential_percent}
                    />
                  </CircularBar>
                  <h1 style={{ fontSize: "10px", fontWeight: "bold" }}>
                    Remanufacturing Potential
                  </h1>
                </RightSide>
              </LeftWrapper>
              <Link
                key={index}
                to={{ pathname: "/part-detail", state: { post } }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button>View Details</Button>{" "}
              </Link>
            </Post>
          );
        })}
      </Posts>
      <Pagination
        postsPerPage={10}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    </Container>
  );
};

function CircularProgressWithLabel(props) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "5px",
      }}
    >
      <CircularProgress
        style={{ color: "Green", marginBottom: "19px" }}
        size="5rem"
        variant="determinate"
        {...props}
      />
      <div
        style={{
          color: "Black",
          top: 0,
          left: 0,
          bottom: 7,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h6
          style={{ fontWeight: "bold" }}
          variant="caption"
          component="div"
          color="text.secondary"
        >
          {`${Math.round(props.value)}%`}
        </h6>
      </div>
    </div>
  );
}

export default Part;
