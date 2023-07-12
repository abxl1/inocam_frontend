import { styled } from 'styled-components';
// export const  = styled.div``

export const Align = styled.div`
  margin-bottom: 40px;
`

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
  cursor: pointer;
`

export const H1 = styled.h1`
  margin-left: 10px;
  font-weight: 700;
  padding-left: 0px;
`

export const SelectBtn = styled.button`
  border: 1px solid lightgrey;
  border-radius: 10px;
  display : flex; 
  align-items : center; 
  justify-content : space-between;
  width: 250px;
  height: 30px;
  background-color: #fff;
  cursor: pointer;

  overflow: hidden; // 버튼 내 텍스트 말줄임표
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const SelecPosition = styled.div`
  margin-top: 10px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  width: 250px;
  position: ${(props) => props.position}; // prop의 값을 받아와서 style 적용

    div {
      overflow: hidden; // 옵션리스트 내 말줄임표
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 8px;
      &:hover {background-color: lightgrey;}
    }
`

export const OverControl = styled.div`
  width: 250px;
  overflow: hidden; // 버튼 내 텍스트 말줄임
  display: flex;
  justify-content: space-between; // display와 함께 요소 양쪽 끝 배치
`

export const Wrap = styled.div`
  border: 1px solid lightgrey;
  height: 200px;
  margin: 10px;
  overflow: hidden;
`

export const WrapSelecBtn = styled.div`
  display: flex;
  gap: 20px;
`