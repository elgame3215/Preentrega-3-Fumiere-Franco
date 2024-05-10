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

function playOponentsTurn() {
	while ( oponentShouldPlay() ) {
		oponent.askCard();
	}
	oponent.stand();

	function oponentShouldPlay() {
		return oponent.score < player.score && oponent.cards.length < 4;
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