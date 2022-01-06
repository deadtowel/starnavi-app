import { configureStore } from '@reduxjs/toolkit';
import isGameStartedReducer from './isGameStartedSlice';
import hoverSquaresReducer from './hoverSquaresSlice';

export const store = configureStore({
	reducer: {
		isGameStarted: isGameStartedReducer,
		hoverSquares: hoverSquaresReducer,
	},
});
