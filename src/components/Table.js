import Cell from './Cell';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Table({ size }) {
	// get state from redux store
	const isGameStarted = useSelector((state) => state.isGameStarted.value);

	if (isGameStarted) {
		return (
			<StyledTable size={size}>
				{Array(size * size)
					.fill(0)
					.map((_, index) => (
						<Cell
							row={Math.floor(index / size)}
							col={index % size}
							key={index}
						/>
					))}
			</StyledTable>
		);
	} else return <p>Pick mode and click START</p>;
}

const StyledTable = styled.div`
	margin: 0 auto;
	border: ${(props) => (props.size ? '0.5px solid #000' : 'none')};
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.size}, 1fr)`};
	width: fit-content;
`;

export default Table;
