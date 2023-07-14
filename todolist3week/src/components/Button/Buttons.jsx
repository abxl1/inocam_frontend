import React from "react";
import * as s from '../style'

/* 
button 컴포넌트는 button 객체의 속성을 구조 분해 할당으로 꺼내서 변수로 선언하고, 
getButtonName 함수를 사용해서 button 객체에 맞는 버튼의 이름을 buttonName 변수에 저장.
getButtonName 함수는 button 객체의 name과 width, border 속성에 따라 다른 문자열을 반환.
*/
const Button = ({ button }) => {

  /*
  switch문을 사용해서 width 속성이 어느 case인지에 따라 각각 다른 속성의 값을 반환. 
  위의 세가지 경우가 다 아니라면 검정 박스라는 문자열 반환.
  */
  const getButtonName = (button) => {
    
    switch (button.width) {
      case "200px":
        return button.border === "3px solid rgb(85, 239, 196)" 
                                ? "Large Primary Button" 
                                : "Large Negative Button";
      case "130px":
        return "medium";
      case "100px":
        return "small";
      default:
        return "검정 박스";
    }
  };

  const { height, width, backgroundColor, border, color } = button;
  const buttonName = getButtonName(button);

  // Large Primary Button일 경우에만 alert창을 띄우는 함수를 정의함.
  const showAlert = () => {
    if (buttonName === "Large Primary Button") {
      alert("버튼을 만들어보세요!");
    } else if (buttonName === "medium" || buttonName === "small") {
      // "medium" or "small" 은 return하지 않도록 수정. 그외의 경우에는 "어렵나요"라고 물어봄.
      return;
    } else {
      prompt("어렵나요?");
    }
  };



  return (
    /* 
    onClick 이벤트에 showAlert 함수를 추가.
    Btn 컴포넌트는 styled-components를 적용한 버튼 태그. height, width, background, color, border
    등의 속성을 props로 전달하고, onClick 이벤트에 showAlert 함수를 연결, 버튼안에 buttonName을 텍스트로 넣음.
    */
    <s.Btn onClick={() => {showAlert();}} height={height} width={width} backgroundColor={backgroundColor} color={color} border={border}>
      {buttonName}
    </s.Btn>
  );
};

/*
btnList라는 배열을 props로 받아서 여러 개의 버튼을 만드는 컴포넌트.
btnList 배열에는 여러개의 객체가 들어있음. 
Btns 컴포넌트는 Container 컴포넌트를 사용해서 버튼들을 가로 방향으로 정렬, 반환.
Container 컴포넌트 안에서 btnList 배열을 map 매서드로 순회하면서 
각각의 button 객체를 Button 컴포넌트에 전달.
key 속성에 button 객체의 id 값을 넣어줌. 
*/
const Buttons = ({ btnList }) => {
  return (
    <s.Container>
      {btnList.map((button) => (
        <Button button={button} key={button.id} />
      ))}
    </s.Container>
  );
};

export default Buttons;