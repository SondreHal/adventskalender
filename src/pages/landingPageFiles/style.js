import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const Headline = styled.h1`
	color: #a1c298;
	text-shadow: 0 0 4px black;
	font-size: 8rem;
	text-align: center;
	margin-bottom: 4rem;
	font-family: PlayfulChristmas;
`;

export const BoxesContainer = styled.div`
	display: flex;
	height: 75vh;
	gap: 2rem;
	justify-content: space-evenly;
	text-align: center;
`;

export const Contestants = styled.div`
	background: var(--box-bg);
	height: 100%;
	width: 400px;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	padding-inline: 8rem;

	& input {
		text-align: center;
		height: 3rem;
		border-radius: 1rem;
		border: 1px solid black;
		font-size: 1.5rem;
	}
`;

export const DrawWinnerContainer = styled.div`
	background: var(--box-bg);
	background: var(--box-bg);
	height: 100%;
	width: 400px;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	padding-inline: 8rem;

	> button {
		height: 3rem;
		border-radius: 0.5rem;
		border: 1px solid black;
		background: #c6ebc5;
		font-size: 1.5rem;
		font-weight: bold;

		:hover {
			cursor: pointer;
			background: #a2e29f;
		}
	}

	> small {
		margin-block: auto 1.5rem;
		color: grey;

		:hover {
			cursor: pointer;
			color: #515151;
		}
	}
`;

export const WinnersContainer = styled.div`
	background: var(--box-bg);
	height: 100%;
	width: 400px;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	padding-inline: 8rem;
`;

export const ContestantsWrapper = styled.ul`
	display: flex;
	flex-direction: column;
`;
