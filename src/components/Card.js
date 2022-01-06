import React from 'react';
import styled from 'styled-components';

function Card({ row, col }) {
	return (
		<StyledCard>
			<p>
				row {row + 1}, col {col + 1}
			</p>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	width: fit-content;
	min-width: 12rem;
	padding: 0.5rem 0.2rem;
	background-color: #fbf8e3;
	color: #7a6e51;
	font-weight: bold;
	border: 1px solid #f1eeda;
	border-radius: 3px;
	margin: 0.6rem 0;
	font-weight: 500;
	font-size: 0.9rem;
`;

export default Card;
