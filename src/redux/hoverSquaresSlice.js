import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hoverSquaresSlice = createSlice({
	name: 'hoverSquares',
	initialState,
	reducers: {
		clearHoverSquares: (state) => {
			state.value = initialState.value;
		},
		addHoverSquare: (state, action) => {
			state.value.push(action.payload);
		},
		removeHoverSquare: (state, action) => {
			state.value = state.value.filter(
				(el) =>
					!(el.row === action.payload.row && el.col === action.payload.col),
			);
		},
	},
});

export const { clearHoverSquares, addHoverSquare, removeHoverSquare } =
	hoverSquaresSlice.actions;

export default hoverSquaresSlice.reducer;
