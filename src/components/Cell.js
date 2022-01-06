import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addHoverSquare, removeHoverSquare } from '../redux/hoverSquaresSlice';

function Cell({ row, col }) {
	// state for active cell
	const [isActive, setIsActive] = useState(false);

	// state if cell has clicked
	const [isClicked, setIsClicked] = useState(false);

	// get state from redux store
	const hoveredSquares = useSelector((state) => state.hoverSquares.value);
	const dispatch = useDispatch();

	// cell is clicked => add/remove info from redux store
	useEffect(() => {
		if (isClicked) {
			if (isActive) {
				dispatch(addHoverSquare({ row: row, col: col }));
			} else if (!isActive) {
				dispatch(removeHoverSquare({ row: row, col: col }));
			}
		}
	}, [isActive]);

	// if hoveredSquares in redux store changed externally => discard active state
	useEffect(() => {
		if (hoveredSquares.length === 0) {
			setIsActive(false);
			setIsClicked(false);
		}
	}, [hoveredSquares]);

	// event handler
	function cellClickHandler() {
		setIsActive(!isActive);
		setIsClicked(true);
	}

	return (
		<StyledCell
			onMouseEnter={cellClickHandler}
			isActive={isActive}
		></StyledCell>
	);
}

const StyledCell = styled.div`
	width: 2rem;
	height: 2rem;
	border: 0.5px solid #000;
	cursor: pointer;
	transition: all 0.5s ease;
	background: ${(props) => (props.isActive ? '#03a8f4' : '#fff')};
`;

export default Cell;
