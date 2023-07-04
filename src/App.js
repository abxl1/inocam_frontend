import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Working from './components/Working/Working';
import styled from "styled-components";


function App() {
  // State
  const [todo, setTodo] = useState([]);

  // Form input
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  }
  const onChangeContent = (e) => {
    setInputContent(e.target.value);
  }
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const newTodo = ({
      id: uuid(),
      title: inputTitle,
      content: inputContent,
      state: false,
    })

    setTodo([...todo, newTodo]);
    setInputTitle('');
    setInputContent('');
  }

  const todoDeleteBtn = (id) => {
    const deleteTodo = todo.filter((todo) => todo.id !== id)
    setTodo(deleteTodo);
  }

  const todoChangeBtn = (id) => {
    const changeTodo = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          state: !todo.state,
        }
      }
      return todo;
    })
    setTodo(changeTodo);
  }

  return (
    <Layout>

      <Header />

      <Form
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onSubmitHandle={onSubmitHandle}
        inputTitle={inputTitle}
        inputContent={inputContent}
      />

      {/* Todolist */}
      <div className='todolist-container'>

        {/* Working */}
        <Working
          todo={todo}
          todoDeleteBtn={todoDeleteBtn}
          todoChangeBtn={todoChangeBtn}
          state={false}
        />
      
        {/* Done */}
        <Working
          todo={todo}
          todoDeleteBtn={todoDeleteBtn}
          todoChangeBtn={todoChangeBtn}
          state={true}
        />
      </div>
    </Layout>



  );
}

export default App;

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`