import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useSelector } from 'react-redux';

function CardContainer() {
	// get state from redux store
	const hoverSquares = useSelector((state) => state.hoverSquares.value);

	return (
		<StyledCardContainer>
			<h2>Hovered Squares</h2>
			{hoverSquares.map((square, index) => (
				<Card row={square.row} col={square.col} key={index} />
			))}
		</StyledCardContainer>
	);
}

const StyledCardContainer = styled.div`
	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: 1em;
	}
`;

export default CardContainer;
