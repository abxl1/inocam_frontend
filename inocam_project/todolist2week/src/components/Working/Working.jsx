import * as S from './styled.js'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Working({ todoDeleteBtn, todoChangeBtn, isDone }) {
  const list = useSelector((state) => state.newTodo)
  return (
    <S.Working>
      <h2>{isDone ? "Done...🎉" : "Working .. 🔥"}</h2>
      <S.Wrap>
        {list.filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <S.Container key={todo.id}>
              <Link to={`/detail/${todo.id}`}><S.More>more</S.More></Link>
              <h2>{todo.title}</h2>
              <p>{todo.content}</p>
              <S.Button>
                <S.DeleteButton onClick={() => todoDeleteBtn(todo.id)}>삭제</S.DeleteButton>
                <S.HandleButton onClick={() => todoChangeBtn(todo.id)}>{todo.isDone ? "취소" : "완료"}</S.HandleButton>
              </S.Button>
            </S.Container>
          )
        })}
      </S.Wrap>
    </S.Working>
  )
}

export default Working;
