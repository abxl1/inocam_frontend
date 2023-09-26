import React, { useState } from "react";
import "./App.css";


function App() {

  const [todo, setTodo] = useState([
		{
      id: 1,
			content: "리액트를 배워봅시다",
		},
	]);

  const [content, setContent] = useState("");

  const contentChangeHandler = (event) => {
		setContent(event.target.value);
	};

  const clickAddButtonHandler = () => {
		const newTodo = {
      id: todo.length +1,
			content,
		};
		setTodo([...todo, newTodo]);
		setContent("");
	};

  return (
    <div className='layout'>
      <div className='form'>
        <input value={content} onChange={contentChangeHandler}/>
        <button onClick={clickAddButtonHandler}>
				  추가하기
			  </button>
      </div>
      <h1>Todo List</h1>

      <div className='todoCard'>
          {todo.map((list) => {
						return (
							<div key={list.id} className='todoThing'>
								<p>{list.content}</p>
							</div>
						);
					})}
        </div>
    </div>
  );
}

export default App;
