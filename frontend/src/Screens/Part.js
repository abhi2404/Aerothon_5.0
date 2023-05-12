import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api_url from "../Config/Config";
import { useAlert } from "react-alert";
import axios from "axios";
import Pagination from "../Components/Pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  padding-top: 40px;
`;
const Heading = styled.h2`
  text-align: center;
`;
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
const P = styled.p``;
const Post = styled.div`
  border: 1px solid black;
`;
const Button = styled.div`
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
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
              <P>Age: {post.age}</P>
              <P>Aircraft Mode: {post.aircraft_model}</P>
              <P>Condition {post.condition}</P>
              <P>Name: {post.name}</P>
              <P>Material Composition: {post.material_composition}</P>
              <Link
                key={index}
                to={{ pathname: "/part-detail", state: { post } }}
              >
                <Button>View More</Button>{" "}
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

export default Part;
