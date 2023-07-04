import * as S from './styled.js'

function Form({onSubmitHandle, inputTitle, onChangeTitle, inputContent, onChangeContent}) {
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