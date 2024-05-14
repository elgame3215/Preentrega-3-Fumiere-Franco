function randomCard() {
	return Math.ceil( Math.random() * 10 )
}

function renderizeLastCardFor( {cards , rol} ) {
	const newCardElement = document.createElement( 'p' );
	newCardElement.innerText = cards[ cards.length - 1 ];
	if ( rol == 'main player' ) {
		mainPlayerCardsContainer.appendChild( newCardElement );
	} else {
		oponentCardsContainer.appendChild( newCardElement );
	}
}

function removeAskCardButton() {
	askCardButton.remove();
}

function renderizeUpdatedScoreFor( {rol , score} ) {
	if ( rol == 'main player' ) {
		mainPlayerScoreElement.innerText = `Puntaje: ${score}`;
	} else {
		oponentScoreElement.innerText = `Puntaje: ${score}`;
	}
}

function saveRoundScores() {
	const roundScores = {
		playerScore: player.score,
		oponentScore: oponent.score,
	}
	if (localStorage.getItem('scoresRecord')) {
		const scoresRecord = JSON.parse(localStorage.getItem('scoresRecord'));
		scoresRecord.push(roundScores);
		localStorage.setItem('scoresRecord', JSON.stringify(scoresRecord));
	} else {
		localStorage.setItem('scoresRecord', JSON.stringify([roundScores]));
	}
}

function renderizeEndGameInterface() {
	askCardButton.remove();
	standButton.remove();
	showWinner();
	renderizePlayAgainButton();
}

function showWinner() {
	const winnerElement = document.createElement('p');
	const playerWins = (player.score > oponent.score && player.score <= 21) || oponent.score > 21 ;
    winnerElement.innerText = (playerWins) ? 'Felicitaciones, has ganado!' : 'Lo siento, has perdido.';
	winnerElement.classList.add('result-message', 'border');
	buttonsContainer.appendChild(winnerElement);
}

function renderizePlayAgainButton() {
	const playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'Volver a jugar';
    buttonsContainer.appendChild(playAgainButton);
    playAgainButton.addEventListener('click', () => {
        window.location.reload();
    });
}

function renderizeScoresRecord() {
	// muestra los resultados de todas las rondas en el DOM
	if ( localStorage.getItem('scoresRecord') ) {
		const 	scoresRecord = JSON.parse(localStorage.getItem('scoresRecord'))

		for ( let i = 0; i < scoresRecord.length; i++ ) {
			const round = scoresRecord[i];
			appendRoundScoresToTable( round , i );
		}

		function appendRoundScoresToTable( round , i ) {
			const 	scoresRow = document.createElement('tr'),
				 	roundCountTd = document.createElement('td'),
				 	playerScoreTd = document.createElement('td'),
				 	oponentScoreTd = document.createElement('td');

			scoresRow.classList.add('table-row', 'border');

			roundCountTd.innerText = i + 1;
			scoresRow.appendChild(roundCountTd);
			playerScoreTd.innerText = round.playerScore;
			scoresRow.appendChild(playerScoreTd);
			oponentScoreTd.innerText = round.oponentScore;
			scoresRow.appendChild(oponentScoreTd);
			scoresTable.appendChild(scoresRow);
		}
	}
}