import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border: 1px solid #3CB371;
  border-radius: 12px;
  background-color: #F0FFF0;
`

export const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`

export const Button = styled.button`
  border: 1px solid #3CB371;
  border-radius: 12px;
  background-color: #3CB371;
  color: #F0FFF0;
  font-weight: 700;
  height: 40px;
  width: 140px;
  cursor: pointer;
  
  &:hover{background-color: #fff;
          color: #3CB371;}
`

export const Input = styled.input`
  border: 1px solid #3CB371;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`