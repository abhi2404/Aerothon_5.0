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
  padding-left: 50px;
  padding-right: 50px;

`;
const cardData = [
  {
    img: "/assets/Avionics.jpeg",
    title: "Avionics",
    description: "Avionics refers to electronic systems used in aircraft for navigation, communication, control, and monitoring of various components and functions."
  },
  {
    img: "/assets/Engine.jpg",
    title: "Engine",
    description: "An engine is a machine that converts energy into mechanical force, used in vehicles, machinery, and power generation."
  },
  {
    img: "/assets/Fuselage.jpg",
    title: "Fuselage",
    description: "The fuselage is the main body of an aircraft, housing the crew, passengers, and cargo, and providing structural support"
  },
  {
    img: "/assets/Landing_gear.jpg",
    title: "Landing Gear",
    description: "Landing gear is a crucial aircraft component that supports and stabilizes the aircraft during takeoff and landing operations."
  },
  {
    img: "/assets/Wings.jpg",
    title: "Wings",
    description: "Wings are specialized appendages found in birds, insects, and bats that enable flight and are adapted for various functions like gliding or hovering"
  },
];


const AeroParts = () => {
  return (
    <Container>
      <Heading style={{ fontWeight: "bold", fontSize: "50px" }}>AeroParts</Heading>
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
