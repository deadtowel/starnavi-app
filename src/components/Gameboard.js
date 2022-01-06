import { useState, useRef } from 'react';
import Table from './Table';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { switchState } from '../redux/isGameStartedSlice';
import { clearHoverSquares } from '../redux/hoverSquaresSlice';

function Gameboard() {
	// get states from redux store
	const isGameStarted = useSelector((state) => state.isGameStarted.value);
	const dispatch = useDispatch();

	// state for fetched data
	const [size, setSize] = useState(0);

	// ref for select
	const selectRef = useRef(null);

	// event handler
	function selectChangeHandler(e) {
		// clear already picked squares
		dispatch(clearHoverSquares());

		const gameMode = e.target.value;

		// fetching data from api
		fetch('https://demo1030918.mockable.io/')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setSize(data[gameMode].field);
			})
			.catch((error) => {
				console.error('Error fetching data: ', error);
			});
	}

	function buttonClickHandler() {
		// check if mode is picked
		if (selectRef.current.value === 'default') {
			alert('You should pick mode first!');
			return;
		}

		dispatch(switchState());
		dispatch(clearHoverSquares());
	}

	return (
		<StyledGameboard>
			<div className='Controls-container'>
				<select
					name='mode'
					required
					onChange={selectChangeHandler}
					defaultValue='default'
					ref={selectRef}
				>
					<option value='default' disabled hidden>
						Pick mode
					</option>
					<option value='easyMode'>Easy</option>
					<option value='normalMode'>Normal</option>
					<option value='hardMode'>Hard</option>
				</select>
				<button onClick={buttonClickHandler}>
					{isGameStarted ? 'STOP' : 'START'}
				</button>
			</div>
			<Table size={size} />
		</StyledGameboard>
	);
}

const StyledGameboard = styled.div`
	margin: 0 auto;
	width: fit-content;

	.Controls-container {
		margin: 0 auto;
		width: fit-content;
		display: flex;
		justify-content: space-between;
		margin-bottom: 1em;
		select,
		button {
			margin: 0 0.5rem;
		}

		select {
			padding: 0.4rem 0.1rem;
			font-size: 0.8rem;
		}

		button {
			width: fit-content;
			border: none;
			outline: none;
			background-color: #0075d8;
			cursor: pointer;
			color: #fff;
			font-weight: 700;
			letter-spacing: 1 !important;
			padding: 0.4rem 1rem;
			border-radius: 3px;
		}
	}
`;

export default Gameboard;
