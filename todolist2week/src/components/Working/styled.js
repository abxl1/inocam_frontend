import styled from "styled-components";

export const Working = styled.div`
background-color:white;
`

export const Wrap = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`

export const Container = styled.div`
  border: 4px solid #3CB371;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`

export const Button = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  border: 2px solid #FA8072;
  background-color: #FA8072;
  border-radius: 8px;
  height: 40px;
  width: 50%;
  
  &:hover{background-color: #FFE4E1;
          color: #FA8072;}
`

export const HandleButton = styled.button`
  border: 2px solid #3CB371;
  background-color: #3CB371;
  border-radius: 8px;
  height: 40px;
  width: 50%;
  
  &:hover{background-color: #F0FFF0;
          color: #3CB371;}
`