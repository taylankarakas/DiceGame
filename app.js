
var globalScores, currentScore, activePlayer, playGame;

init();

document.querySelector('.btn-roll').addEventListener('click', function (){

    if (playGame) {

        // random dice.
        var randomDiceNumber = Math.floor(Math.random() * 6 + 1);

        // add the image.
        document.querySelector('.dice').style.display = 'block';
        var dice = document.querySelector('.dice');
        dice.src = 'dice-' + randomDiceNumber + '.png';

        // next player.
        if (randomDiceNumber !== 1) {
        currentScore += randomDiceNumber;

        // random dice update in UI.
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
        

    } else {
        nextPlayer();
    }
}
});


document.querySelector('.btn-hold').addEventListener('click', function () {

    if (playGame) {

        // add current score to global score.
        globalScores[activePlayer] += currentScore;

        // update the UI.
        document.querySelector('#score-' + activePlayer).textContent = globalScores[activePlayer];

        // check if player won the game.
        if (globalScores[activePlayer] === 100 || globalScores[activePlayer] > 100) {
        
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        playGame = false;

    } else {
        // next player.
        nextPlayer();
    }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer () {

    document.querySelector('.dice').style.display = 'none';
    currentScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = currentScore;

    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

function init () {
    globalScores = [0,0];
    currentScore = 0;
    activePlayer = 0; // zero is first player.
    playGame = true,

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    
}
