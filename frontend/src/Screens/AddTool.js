import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;
`;

const Heading = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.2em;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 1em;
  margin-bottom: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2b75e8;
  }
`;

const AddTool = () => {
  const [materialType, setMaterialType] = useState("");
  const [recyclingFacility, setRecyclingFacility] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Material Type:", materialType);
    console.log("Recycling Facility:", recyclingFacility);
    console.log("Location:", location);
    // Reset the form
    setMaterialType("");
    setRecyclingFacility("");
    setLocation("");
  };

  return (
    <Container>
      <Heading>Add Tool</Heading>
      <Form onSubmit={handleSubmit}>
        <Label>
          Material Type:
          <Input
            type="text"
            name="materialType"
            value={materialType}
            onChange={(e) => setMaterialType(e.target.value)}
          />
        </Label>
        <Label>
          Recycling Facility:
          <Input
            type="text"
            name="recyclingFacility"
            value={recyclingFacility}
            onChange={(e) => setRecyclingFacility(e.target.value)}
          />
        </Label>
        <Label>
          Location:
          <Input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default AddTool;