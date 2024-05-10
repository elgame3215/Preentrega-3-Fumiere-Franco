function randomCard() {
	return Math.ceil( Math.random() * 10 )
}

function renderizeLastCardFor( player ) {
	const newCardElement = document.createElement( 'p' );
	newCardElement.innerText = player.cards[ player.cards.length - 1 ];
	if ( player.rol == 'main player' ) {
		mainPlayerCardsContainer.appendChild( newCardElement );
	} else {
		oponentCardsContainer.appendChild( newCardElement );
	}
}

function removeAkCardButton() {
	askCardButton.remove();
}

function renderizeUpdatedScoreFor( player ) {
	if ( player.rol == 'main player' ) {
		mainPlayerScoreElement.innerText = `Puntaje: ${player.score}`;
	} else {
		oponentScoreElement.innerText = `Puntaje: ${player.score}`;
	}
}

function saveRoundScores() {
	const roundScores = {
		playerScore: player.score,
		oponentScore: oponent.score,
	}
	if (localStorage.getItem('scoresRecord')) {
		const 	scoresRecord = JSON.parse(localStorage.getItem('scoresRecord'));
		scoresRecord.push(roundScores);
		localStorage.setItem('scoresRecord', JSON.stringify(scoresRecord));
	} else {
		localStorage.setItem('scoresRecord', JSON.stringify([roundScores]));
	}
}