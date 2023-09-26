import React, { useState } from "react";
import * as s from '../style'

/*
isOpen이라는 상태변수를 사용하여 모달이 열려있는지 여부를 추적.
초기값은 false로, 모달이 기본적으로 닫혀있는 설정.
*/
function Modal({ modalType }) {

  const [isOpen, setIsOpen] = useState(false);

/*
handleClickOpen 함수는 매개변수로 이벤트 객체를 받지만,
단순히 현재 isOpen 상태의 반대값으로 setIsOpen 함수를 호출.
즉, 모달이 닫혀있다면 열고, 그 반대라면 닫음.
*/
  const handleClickOpen = (e) => {
    setIsOpen((isOpen) => !isOpen);
  };

/*
handleClickClose 함수는 매개변수를 받지 않음. 
그냥 false로 setIsOpen 함수를 호출하여 항상 모달을 닫음.
handleClikckOpen과 handleClickClose는 모달을 제어하는 버튼에
이벤트 핸들러로 전달. modalType의 값에 따라 다른 스타일과 동작을 가진 버튼이 렌더링됨.
*/
  const handleClickClose = () => {
    setIsOpen(false);
  };

  const greenBtnList = [
    {
      name: "BtnForModal",
      width: "100px",
      height: "40px",
      backgroundColor: "rgb(85, 239, 196)",
      color: "rgb(0, 0, 0)",
      id: 3,
      border: "none",
    },
  ];
  const PinkBtnList = [
    {
      name: "BtnForModal",
      width: "200px",
      height: "50px",
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(214, 48, 49)",
      id: 4,
      border: "3px solid rgb(250, 177, 160)",
    },
  ];
 // 삼항연산자 
 // 1) modalType이 'modal_1'일 경우
  return (
    <div>
      {modalType === "modal_1" ? (
        <div>
          <s.RightAlignedContainer>
            {greenBtnList.map((btn) => (
              <s.StBtn
                onClick={handleClickOpen}
                height={btn.height}
                width={btn.width}
                backgroundColor={btn.backgroundColor}
                color={btn.color}
                border={btn.border}
                key={btn.id}
              >
                Open Modal
              </s.StBtn>
            ))}
          </s.RightAlignedContainer>
{/* isOpen이라는 상태 변수가 참일 경우, 즉 모달이 열려있을 경우.
첫번째 버튼(닫기)은 onClick 속성에 handleClickClose 함수를 전달하여, 버튼을 클릭하면 모달이 닫힘. 
두번째 버튼(확인)은 onClick 속성이 없고, 아무 동작도 하지 않음 */}
          {isOpen && (
            <>
              <s.StModalBox />
              <s.StModal>
                <p>
                  닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
                </p>
                <s.RightAlignedContainer>
                  <s.StBtn
                    onClick={handleClickClose} 
                    width="100px"
                    height="40px"
                    backgroundColor="rgb(85, 239, 196)"
                    color="rgb(0, 0, 0)"
                    border="none"
                  >
                    닫기
                  </s.StBtn>
                  <s.StBtn
                    width="100px"
                    height="40px"
                    backgroundColor="rgb(250, 177, 160)"
                    color="rgb(0, 0, 0)"
                    border="none"
                  >
                    확인
                  </s.StBtn>
                </s.RightAlignedContainer>
              </s.StModal>
            </>
          )}
        </div>
// 2) modalType이 'modal_2'일 경우
// PinkBtnList라는 상수 배열을 map 메서드로 순회하면서,
// 각 요소의 속성들을 StBtn이라는 스타일드 컴포넌트에 전달.
// onClick 속성에 handleClickOpen 함수를 전달, 버튼을 클릭하면 모달이 열림.
      ) : (
        <div>
          {PinkBtnList.map((btn) => (
            <s.StBtn
              onClick={handleClickOpen}
              height={btn.height}
              width={btn.width}
              backgroundColor={btn.backgroundColor}
              color={btn.color}
              border={btn.border}
              key={btn.id}
            >
              Open Modal
            </s.StBtn>
          ))}
{/* isOpen이라는 상태 변수가 참일 경우, 즉 모달이 열려있을 경우,
StModalBox는 모달의 배경을 흐리게 만드는 역할
onClick 속성에 handleClickClose 함수를 전달하여,
배경을 클릭하면 모달이 닫히도록 함.
그리고 버튼에 onClick 속성에 handleClickClose 함수를 전달하여
버튼을 클릭하면 모달이 닫히도록 함.
전체적인 모달을 형성하는 키워드 : modalType을 삼항연산자로 나눠서 조건렌더링하고, 
isOpen에 따라 다른 모달 렌더링*/}
          {isOpen && (
            <>
              <s.StModalBox onClick={handleClickClose} />
              <s.StModal>
                <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
                <button onClick={handleClickClose}>X</button>
              </s.StModal>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Modal;