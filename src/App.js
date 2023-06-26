import React, { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState([{
    id: 1,
    title: '투두 추가하기',
    content: 'CSS 꾸미기',
    set: false
  }])

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      content,
      set: false,
    };
    setTodo([...todo, newTodo])
    setTitle("")
    setContent("")
  };

  const DoneTodoButton = (id) => {
    const updatedTodo = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          set: true,
        };
      }
      return todo;
    });
    setTodo(updatedTodo);
  };

  const cancleTodoButton = (id) => {
    const cancleTodo = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          set: false,
        };
      }
      return todo;
    });
    setTodo(cancleTodo);
  };

  const deleteUserHandler = (id) => {
    const deleteTodo = todo.filter((todo) => todo.id !== id);
    setTodo(deleteTodo);
  }

  const runningTodo = todo.filter((todo) => !todo.set);
  const doneTodo = todo.filter((todo) => todo.set);






  return (
    <div className='layout'>
      <div className='firstBox'>
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className='inputAndAddBox'>
        <div className='inputTodoBox'>
          <div>제목</div>
          <input value={title} onChange={titleChangeHandler} className='inputBox'/>
          <div>내용</div>
          <input value={content} onChange={contentChangeHandler} className='inputBox'/>
        </div>
        <button className='addBox' onClick={clickAddButtonHandler}>
          추가하기
        </button>
      </div>
      <div className='listContainer'>
        <h2>
            Working.. 🔥
        </h2>
        <div className='runBox'>
          <div className='todoCard'>
            {runningTodo.map((list) => {
              return (
                <div key={list.id} className='todoThing'>
                  <div className='todoContent'>
                    <h3>{list.title}</h3>
                    <p>{list.content}</p>
                    <div className='buttonSet'>
                      <button onClick={() => deleteUserHandler(list.id)}  
                              className='todoDeleteButton'>삭제</button>
                      <button onClick={() => DoneTodoButton(list.id)}  
                            className='todoDoneButton'>완료</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='listContainer'>
        <h2>
            Done..! 🎉
          </h2>
        <div className='doneBox'>
          <div className='todoCard'>
            {doneTodo.map((list) => {
              return (
                <div key={list.id} className='todoThing'>
                  <div className='todoContent'>
                    <h3>{list.title}</h3>
                    <p>{list.content}</p>
                    <div className='buttonSet'>
                      <button onClick={() => deleteUserHandler(list.id)}  
                              className='todoDeleteButton'>삭제</button>
                      <button onClick={() => cancleTodoButton(list.id)}  
                              className='todoCancelButton'>취소</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  );
};
export default App;
