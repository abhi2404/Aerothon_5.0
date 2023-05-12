import React from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
const Container = styled.div``

const P = styled.p``
const PartDetail = () => {
    const location = useLocation();
    const { post } = location.state;
    console.log(post)
  return (<>
    <div>Age: {post.age}</div>
    <div>Condition: {post.condition}</div>
    <div>Material Composition: {post.material_composition}</div>
    <div>Aircraft Model: {post.aircraft_model}</div>
   
    </>
  )
}

export default PartDetail