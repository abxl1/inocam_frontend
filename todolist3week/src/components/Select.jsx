import React, { useEffect, useRef, useState } from 'react';
import * as s from './style';


function Select() {

  // 옵션의 스프레드 여부 상태와 옵션 선택의 상태
  const [ isOptionSpread, setIsOptionSpread ] = useState(false);
  const [ selectedOption, setSelectedOption ] = useState('');

  // 옵션 스프레드(버튼 클릭시) 렌더링 방지
  const selectRef = useRef(null);

  const options = ['리액트', '자바', '스프링', '자바스크립트'];

  const selectClickHandler = () => {
    setIsOptionSpread(!isOptionSpread);
  }

  const optionClickHandler = (option) => {
    setSelectedOption(option);
    setIsOptionSpread(false);
  }
  
  useEffect(() => {
    const clickOuter = (event) => {
      if (isOptionSpread && selectRef.current && !selectRef.current.contain(event.tartget)) {setIsOptionSpread(false);}
    };
  
    document.addEventListener('mousedown', clickOuter);

    return () => {
      document.removeEventListener('mousedown', clickOuter);
    }
  }, [isOptionSpread]);
    

  return (
    <>
      <s.SelectZone>
        <s.H1>Select</s.H1>
          <s.SelectWrapper>
            <s.SelectAlign>
              <s.SelectBtn ref={selectRef} onClick={selectClickHandler}>
                <option value={options[0]}>리액트</option>
                <option value={options[1]}>자바</option>
                <option value={options[2]}>스프링</option>
                <option value={options[3]}>자바스크립트</option>
                <div>▼</div>
              </s.SelectBtn>
            </s.SelectAlign>
            <s.SelectAlign>
            <s.SelectBtn ref={selectRef} onClick={selectClickHandler}>
                <option value={options[0]}>리액트</option>
                <option value={options[1]}>자바</option>
                <option value={options[2]}>스프링</option>
                <option value={options[3]}>자바스크립트</option>
                <div>▼</div>
              </s.SelectBtn>
            </s.SelectAlign>
          </s.SelectWrapper>
        </s.SelectZone>
    </>
  )
}

export default Select;