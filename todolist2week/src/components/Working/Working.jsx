import * as S from './styled.js'

function Working({ todo, todoDeleteBtn, todoChangeBtn, state }) {
  return (
    <S.Working>
      <h2>{state ? "Done...🎉" : "Working .. 🔥"}</h2>
      <S.Wrap>
        {todo.filter((todo) => todo.state === state).map((todo) => {
          return (
            <S.Container>
              <h2>{todo.title}</h2>
              <p>{todo.content}</p>
              <S.Button>
                <S.DeleteButton onClick={() => todoDeleteBtn(todo.id)}>삭제</S.DeleteButton>
                <S.HandleButton onClick={() => todoChangeBtn(todo.id)}>{todo.state ? "취소" : "완료"}</S.HandleButton>
              </S.Button>
            </S.Container>
          )
        })}
      </S.Wrap>
    </S.Working>
  )
}

export default Working;
