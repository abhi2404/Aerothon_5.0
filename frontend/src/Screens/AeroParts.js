import React from "react";
import styled from "styled-components";
import Card from "../Components/Card/Card";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
`;
const Heading = styled.h2`
  text-align: center;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 100px;
  padding-right: 100px;
`;
const cardData = [
  {
    img: "/assets/Fuselage.jpg",
    title: "Fuselage",
    description:
      "Landing gear is a crucial aircraft component that supports and stabilizes the aircraft during takeoff and landing operations.",
  },
  {
    img: "/assets/Fuselage.jpg",
    title: "Fuselage",
    description:
      "Landing gear is a crucial aircraft component that supports and stabilizes the aircraft during takeoff and landing operations.",
  },
  {
    img: "/assets/Fuselage.jpg",
    title: "Fuselage",
    description:
      "Landing gear is a crucial aircraft component that supports and stabilizes the aircraft during takeoff and landing operations.",
  },
  {
    img: "/assets/Fuselage.jpg",
    title: "Fuselage",
    description:
      "Landing gear is a crucial aircraft component that supports and stabilizes the aircraft during takeoff and landing operations.",
  },
  {
    img: "/assets/Fuselage.jpg",
    title: "Fuselage",
    description:
      "Landing gear is a crucial aircraft component that supports and stabilizes the aircraft during takeoff and landing operations.",
  },
];
const AeroParts = () => {
  return (
    <Container>
      <Heading>AeroParts</Heading>
      <Cards>
        {cardData.map((card) => {
          return (
            <Link
              key={card.id}
              to={{ pathname: "/part", state: { title: card.title } }}
            >
              <Card
                img={card.img}
                title={card.title}
                description={card.description}
              />
            </Link>
          );
        })}
      </Cards>
    </Container>
  );
};

export default AeroParts;
