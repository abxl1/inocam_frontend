import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import rtan from "../img/SpartaIconScale17.png"

function Detail() {
  const params = useParams()

  const list = useSelector((state) => state.newTodo)

  const foundlist = list.find((item) => {
    return item.id === +params.id
  })

  return (
    <Align>
      <Center>
        <p>id : {foundlist.id}</p>
        <h2>{foundlist.title}</h2>
        <div>{foundlist.content}</div>
        <Link to="/"><Back>back</Back></Link>
        <img src={rtan} alt='르탄이!'></img>
      </Center>
    </Align>
  )
}

export default Detail;

const Back = styled.button`
  margin-top: 10px;
  border: 2px solid #3CB371;
  border-radius: 12px;
  background-color: #3CB371;
  color: #F0FFF0;
  cursor: pointer;
  &:hover{background-color: #F0FFF0;
          color: #3CB371;}
  
`
const Align = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Center = styled.div`
  border: 4px solid #3CB371;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`