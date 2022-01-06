import GlobalStyle from './GlobalStyle';
import Gameboard from './components/Gameboard';
import CardContainer from './components/CardContainer';
import styled from 'styled-components';

function App() {
	return (
		<StyledApp>
			<GlobalStyle />
			<Gameboard />
			<CardContainer />
		</StyledApp>
	);
}

const StyledApp = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	column-gap: 2rem;
	padding: 3rem 10rem;
`;

export default App;
