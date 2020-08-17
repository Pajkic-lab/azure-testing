import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; 
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const incrementAsync = amount => async dispatch => {
  const res = await axios.post('/test', {amount})
    dispatch(incrementByAmount(res.data.amount))
};

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
