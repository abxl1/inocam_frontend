import React from 'react'
import * as s from './style'
import { useState } from 'react';

function Form() {

  const [ inputName, setInputName ] = useState(''); // 이름 입력
  const [ inputMuch, setInputMuch ] = useState(''); // 가격 입력

  // 이름 변경
  const inputNameChange = (event) => {
    setInputName(event.target.value)
  }
  
  // 가격 변경
  const inputMuchChange = (event) => {
    const much = event.target.value.replace(/[^0-9]/g, '') // only 숫자로 제어
    const nextMuch = much.replace(/\B(?=(\d{3})+(?!\d))/g, ",") // 3자리마다 (,) 추가
    setInputMuch(nextMuch)
  }

  // 저장 버튼, input 2개 모두 입력 필요, 가격은 (,) 제외 출력
  const saveBtnEvent = () => {
    if (inputName.trim() === "" || inputMuch.trim() === "") { // trim() 스페이스바 공백까지도 제거
      alert("두 값을 모두 입력해 주세요")
    } else {
      alert(`{ name: ${inputName}, price: ${inputMuch.replace(/,/g, '')} }`) // (,)는 제거 후 출력
    }
  }

  return (
    <>
    <s.H1>input</s.H1>
      <s.Form>
        <s.FormInput>
          <label>이름</label>
          <input type="text" value={inputName} onChange={inputNameChange}/>
        </s.FormInput>
        <s.FormInput>
          <label>가격</label>
          <input type="text" value={inputMuch} onChange={inputMuchChange}/>
        </s.FormInput>
        <s.FormSaveBtn onClick={saveBtnEvent}>
        저장
        </s.FormSaveBtn>
      </s.Form>
    
    </>
  )
}

export default Form;