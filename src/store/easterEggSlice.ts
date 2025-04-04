import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EasterEggState {
  matrixActive: boolean;
  snakeActive: boolean;
  demoActive: boolean;
  blogActive: boolean;
}

const initialState: EasterEggState = {
  matrixActive: false,
  snakeActive: false,
  demoActive: false,
  blogActive: false,
};

const easterEggSlice = createSlice({
  name: 'easterEgg',
  initialState,
  reducers: {
    setMatrixActive: (state, action: PayloadAction<boolean>) => {
      state.matrixActive = action.payload;
    },
    setSnakeActive: (state, action: PayloadAction<boolean>) => {
      state.snakeActive = action.payload;
    },
    setDemoActive: (state, action: PayloadAction<boolean>) => {
      state.demoActive = action.payload;
    },
    setBlogActive: (state, action: PayloadAction<boolean>) => {
      state.blogActive = action.payload;
    },
  },
});

export const { setMatrixActive, setSnakeActive, setDemoActive, setBlogActive } = easterEggSlice.actions;
export default easterEggSlice.reducer; 