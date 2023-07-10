import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 10px;
  gap: 30px;
  align-items: center;
`

export const FormInput = styled.div`
  input {
    width: 220px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 8px;
  }
`

export const FormSaveBtn = styled.button`
  border: 1px solid greenyellow;
  border-radius: 8px;
  background-color: greenyellow;
  color: #000;
  width: 100px;
  height: 40px;
`

export const H1 = styled.h1`
  margin-left: 10px;
  font-weight: 700;
`

export const SelectZone = styled.div`
  border: 3px solid gray;
  margin: 10px;
`

export const SelectWrapper = styled.div`
  display : flex; 
  gap : 10px;
`

export const SelectAlign = styled.div`
  position : relative;
  margin: 10px;
`

export const SelectBtn = styled.button`
  border: 1px solid gray;
  border-radius: 10px;
  display : flex; 
  align-items : center; 
  justify-content : space-between; 
  padding : 0px 28x;
  width: 250px;
  height: 30px;
  background-color: #fff;
`