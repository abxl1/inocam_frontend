import React from 'react'
import styled from "styled-components";
// import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Working from '../components/Working/Working';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeTodo } from '../redux/modules/todos';

function Home() {
  const dispatch = useDispatch()
  
  const todoDeleteBtn = (id) => {
    dispatch(deleteTodo(id))
  }

  const todoChangeBtn = (id) => {
    dispatch(changeTodo(id))
  }

  return (
    <div>
      <Layout>
        <Header />

        <Form />

        {/* Todolist */}
        <div className='todolist-container'>

          {/* Working */}
          <Working
            todoDeleteBtn={todoDeleteBtn}
            todoChangeBtn={todoChangeBtn}
            isDone={false}
          />

          {/* Done */}
          <Working
            todoDeleteBtn={todoDeleteBtn}
            todoChangeBtn={todoChangeBtn}
            isDone={true}
          />
        </div>
      </Layout>
    </div>
  )
}

export default Home;

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`