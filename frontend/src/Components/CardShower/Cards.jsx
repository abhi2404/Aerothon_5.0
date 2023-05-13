import React, { useState } from "react";
import Card from "./Card";
import styled from "@emotion/styled";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 60rem;
  align-items: center;
  justify-content: center;
`;

export default function Cards({ allpost }) {
  return (
    <Container>
      {allpost.map((course) => {
        return <C ard props={course} />;
      })}
    </Container>
  );
}
