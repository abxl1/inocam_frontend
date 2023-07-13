import React, { useEffect, useRef, useState } from 'react';
import * as s from '../style';

function Select({position}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('리액트');
  const options = ['자바', '스프링', '리액트', '자바스크립트', '리액트 너무 재미있어요~!~!~!~!~!~!~!~!~!~!~~!~~']; 

  const selectRef = useRef(); 

  const handleOptionClick = (i) => { // 옵션을 선택하면 실행
    setSelectedOption(options[i]);
    setIsOpen(!isOpen); // 리스트 상태 반대로
  };

  // 클릭 이벤트 리스너 등록 - 최상위 부모에 입력
  useEffect(() => {

    const handleClickOutside = (event) => { // 옵션의 바깥을 누르면 실행
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside); // select가 열리면(마운트되면) 동작
    return () => { // 새로고침되는 순간에 동작!
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return ( 
    <>
      <div ref={selectRef}>
        <s.SelectBtn onClick={()=>{setIsOpen(!isOpen)}}>
          <s.OverControl>
          {selectedOption}
          </s.OverControl>
          <div>▼</div>
        </s.SelectBtn>
            {isOpen && (<s.SelecPosition position={position}>
                {options.map((option, i) => {
                  return <div
                    key={i}
                    onClick={() => handleOptionClick(i)}>
                    {option}
                  </div>
                })}
              </s.SelecPosition>)
            }
      </div>
    </>
  )
}

export default Select;