// 중앙 데이터 관리소(state)를 설정하는 부분
import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import newTodo from "../modules/todos";


const rootreducer = combineReducers({
  newTodo,
});
const store = legacy_createStore(rootreducer);

export default store;