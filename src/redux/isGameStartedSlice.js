import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
};

export const isGameStartedSlice = createSlice({
	name: 'isGameStarted',
	initialState,
	reducers: {
		switchState: (state) => {
			state.value = !state.value;
		},
		setState: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { switchState, setState } = isGameStartedSlice.actions;

export default isGameStartedSlice.reducer;
