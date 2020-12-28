import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import api from 'src/services/api';

export interface ITODO {
  userID: number,
  id: number,
  title: string,
  completed: boolean,
};

const todosAdapter = createEntityAdapter<ITODO>();

export const fetchAllTodos = createAsyncThunk(
  'todos/fetchAllTodos',
  async () => {
    const response = await api.get<ITODO[]>('todos');
    return response.data;
  },
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    status: 'idle' || 'pending' || 'succeeded' || 'failed',
    errors: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        todosAdapter.setAll(state, action.payload);
      });
  },
});

export const {
  selectAll,
  selectById,
  selectEntities,
  selectIds,
  selectTotal,
} = todosAdapter.getSelectors();

export default todosSlice.reducer;
