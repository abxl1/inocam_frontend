import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    try {
      await waitTwoSeconds();
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    } 
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    try {
      await waitTwoSeconds();
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const i = state.list.findIndex((todo) => todo.id === action.payload);
      if (i !== -1) {
        state.list.splice(i, 1);
      }
    },
  },

  // 비동기 요청을 한다는 것은 요청을 기다리는 시간이나 등등을 계산해야 함 -> 그 과정을 처리하는 엑스트라 리듀서!
  
  extraReducers: (builder) => {
    builder.addCase(__addToDo.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(__deleteTodo.fulfilled, (state, action) => {
      const id = action.payload;
      const index = state.list.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
    });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
