import React from 'react'
import * as s from '../style'
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
    const much = event.target.value
                      .replace(/[^0-9]/g, '') // only 숫자로 제어
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") // 3자리마다 (,) 추가
    setInputMuch(much)
  }

  // 저장 버튼, input 2개 모두 입력 필요, 가격은 (,) 제외 출력
  const saveBtnEvent = (event) => {
    event.preventDefault();
    if (inputName.trim() === "" || inputMuch.trim() === "") { // trim() 스페이스바 공백까지도 제거
      alert("두 값을 모두 입력해 주세요")
    } else {
      alert(`{ name: ${inputName}, price: ${inputMuch.replace(/,/g, '')} }`) // (,)는 제거 후 출력
    }    
  }

  return (
    <s.Align>
      <s.H1>Input</s.H1>
        <s.Form>
          <s.FormInput>
            <label>이름</label>
            <input placeholder='이름을 입력해 주세용' type="text" value={inputName} onChange={inputNameChange}/>
          </s.FormInput>
          <s.FormInput>
            <label>가격</label>
            <input placeholder='0' type="text" value={inputMuch} onChange={inputMuchChange}/>
          </s.FormInput>
          <s.FormSaveBtn onClick={(event)=>{saveBtnEvent(event)}}>
          저장
          </s.FormSaveBtn>
        </s.Form>
    </s.Align>
  )
}

export default Form;