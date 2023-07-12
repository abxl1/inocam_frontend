import React from 'react'
import Buttons from './Buttons';
import * as s from '../style'

function ButtonWrap() {

  
  // button list
  const greenBtnList = [
    { width: "200px", height: "50px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", id: 1, border: "3px solid rgb(85, 239, 196)" },
    { width: "130px", height: "45px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 2, border: "none" },
    { width: "100px", height: "40px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 3, border: "none" },
  ];
  const PinkBtnList = [
    { width: "200px", height: "50px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(214, 48, 49)", id: 4, border: "3px solid rgb(250, 177, 160)" },
    { width: "130px", height: "45px", backgroundColor: "rgb(250, 177, 160)", color: "rgb(214, 48, 49)", id: 5, border: "none" },
    { width: "100px", height: "40px", backgroundColor: "rgb(250, 177, 160)", color: "rgb(214, 48, 49)", id: 6, border: "none" },
  ];


  return (
    <>
      <s.H1>Button</s.H1>
      <s.StBox>
        <Buttons btnList={greenBtnList} />
        <Buttons btnList={PinkBtnList} />
      </s.StBox>
    </>
  )
}

export default ButtonWrap;