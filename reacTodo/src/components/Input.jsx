import React from "react";

function Input({ title, titleChangeHandler, content, contentChangeHandler, clickAddButtonHandler }) {
	return (
		<div className='inputAndAddBox'>
			<div className='inputTodoBox'>
				<div>제목</div>
				<input value={title} onChange={titleChangeHandler} className='inputBox' />
				<div>내용</div>
				<input value={content} onChange={contentChangeHandler} className='inputBox' />
			</div>
			<button className='addBox' onClick={clickAddButtonHandler}>
				추가하기
			</button>
		</div>
	);
}

export default Input;
