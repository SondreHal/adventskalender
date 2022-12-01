import React, { useEffect, useState } from 'react';
import * as style from './landingPageFiles/style';

const LandingPage = () => {
	const [contestants, setContestants] = useState([]);
	const [newContestant, setNewContestant] = useState('');
	const contestantsList = contestants.map((person, key) => <li key={key}>{person}</li>);

	useEffect(() => {
		setContestants(JSON.parse(localStorage.contestants));
	}, []);

	useEffect(() => {
		localStorage.contestants = JSON.stringify(contestants);
	}, [contestants]);

	return (
		<style.Container>
			<style.Headline>Adventskalender Kodehode</style.Headline>

			<style.BoxesContainer>
				<style.Contestants>
					<h2>Contestants</h2>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setContestants((prevContestants) => [...prevContestants, newContestant]);
							setNewContestant('');
						}}
					>
						<label htmlFor='newContestant'></label>
						<input
							type='text'
							id='newContestant'
							placeholder='Add contestant'
							name='newContestant'
							onChange={(e) => setNewContestant(e.target.value)}
							value={newContestant}
							required
						/>
					</form>

					<style.ContestantsWrapper>{contestantsList}</style.ContestantsWrapper>
				</style.Contestants>

				<style.DrawWinnerContainer>
					<h2>Raffle</h2>

					<button>Draw Winner</button>
					<small
						onClick={() => {
							localStorage.clear();
							setContestants([]);
						}}
					>
						Reset Raffle
					</small>
				</style.DrawWinnerContainer>

				<style.WinnersContainer>
					<h2>Winners</h2>
				</style.WinnersContainer>
			</style.BoxesContainer>
		</style.Container>
	);
};

export default LandingPage;
