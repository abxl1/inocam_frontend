import * as S from './styled.js'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos.js';
import { useState } from 'react';

function Form() {

  const dispatch = useDispatch();
  
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
      id: Date.now(),
      title: inputTitle,
      content: inputContent,
      isDone: false,
    })
    dispatch(addTodo(newTodo));
    setInputTitle('');
    setInputContent('');
  }
  

return (
    <S.Form onSubmit={onSubmitHandle}>
        <S.Div>
          <label>제목</label>
          <S.Input type="text" value={inputTitle} onChange={onChangeTitle} />
          <label>내용</label>
          <S.Input type="text" value={inputContent} onChange={onChangeContent} />
        </S.Div>
        <S.Button>추가하기</S.Button>
      </S.Form>

  )
}

export default Form;