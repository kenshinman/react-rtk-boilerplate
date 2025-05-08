import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrease: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: state => {
      state.value = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        // Optionally handle pending state
        console.log("value before increment", state.value)
      })
      .addCase(incrementAsync.rejected, (state) => {
        // Optionally handle rejected state
        console.log("rejected", state.value)
      })
      // Handle the fulfilled state
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      });
  },
})

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    const response = await new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 1000)
    );
    return response.data;
  }
);

export const { increment, decrease, reset, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: { counter: { value: number } }) => state.counter.value;
export default counterSlice.reducer;
// This is a Redux slice for managing a simple counter state.
// It uses Redux Toolkit's createSlice function to define the initial state, reducers, and actions.
// The initial state is an object with a single property value, initialized to 0.
// The slice defines three reducers: increment, decrease, and reset.
// The increment reducer increases the value by 1, the decrease reducer decreases it by 1,
// and the reset reducer sets the value back to 0.