// action value
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGE_TODO = "CHANGE_TODO";

// action creator = action value 를 return하는 함수

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const changeTodo = (id) => {
  return {
    type: CHANGE_TODO,
    payload: id,
  }
}

// 초기 상태값 - 더미 데이터!

const initialState = [  
  {
    id: 1,
    title: "리액트 라우터까지!",
    content: "영차영차",
    isDone: false,
  },
]

// 리듀서 : state의 변화를 일으키는 '함수'
// -> state, action의 type에 따라 변경하는 함수


// input : state, action
// action 객체라는 것은 action value type을 payload만큼 처리하는 것!!!
// ex : payload가 3 -> 3만큼 plus!
const newTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO :
      return [...state, action.payload]
    case DELETE_TODO :
      return state.filter((todo) => todo.id !== action.payload);
    case CHANGE_TODO :
      return state.map((todo) =>
                todo.id === action.payload
                ? { ...todo, 
                  isDone: !todo.isDone } 
                : todo
            );
    default:
      return state;
  }
}


export default newTodo;