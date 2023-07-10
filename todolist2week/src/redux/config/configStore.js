// 중앙 데이터 관리소(state)를 설정하는 부분
import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import newTodo from "../modules/todos";

// AS IS 일반 리듀서
const rootreducer = combineReducers({
  newTodo: newTodo,
});
const store = legacy_createStore(rootreducer);


// TO DO 리덕스 툴킷

// const store = configure({
//   // reducer 가 위치함! 
//   // key : value 페어

//   reducer: {
//     newTodo: newTodo,

//   }
// })

export default store;