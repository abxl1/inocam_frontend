import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import rtanWork from "../img/SpartaIconScale17.png"
import rtanDone from "../img/image.png"

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
        <ImgLayout>
          <img src={foundlist.isDone ? rtanDone : rtanWork } alt='진행중 르탄이!'></img>
        </ImgLayout>
      </Center>
    </Align>
  )
}

export default Detail;

const ImgLayout = styled.figure`
  width: 200px;
  img {
    width: 100%;
  }
`

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