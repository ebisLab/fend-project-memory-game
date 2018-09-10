/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



function createCard(className) {
//create list item from iteration
	var element = document.createElement(tagName[], options[]);
}

function createTheGameCanvas() { //this should append to the deck class

}

function compareCards (cardA, cardB) {
}

function gameOver()
 {
 
 }
 
 //Counter SetUp
 var count = 5;
 
 fundction resetCounter(bool) {
 
 if(bool ===true) {
 count++)
 
 }
 
 //If all the cards match
 
 var matchedCards = []; 
 if(matchedCards.length ===16) {
 console.log("You won the game! Congratulations!");
 }
 
 //preventing from clicking match
 var lastFlipped = null;
 
 function activateCards() {
 	document.querySelectorAll('li.card').forEach(function(card) {
 		card.addEventListener('click', function() {
 			if(lastFlipped) { 
 				console.log(lastFlipped, card);
 				compareCards(lastFlipped, card)
 				}
 			else {
 			lastFlipped = card;
 			 }
 			 })
 			 })
 			 
 function compareCards(lastFlipped, card) {
 }
 
 
 
 //Reset Timer
 var timer = 0;
 var timer;
 var initialClick=false;
 
 function setTimer() {
 	timer = setInterval(function){
 		time++;
 			console.log(time);
		 }, 1000); //1000 = 1 second
 }
 
 //to stop 
 function clearTimer() {
 clearInterval(timer);
 }
 
 resetBtn.addEventListener('click', function() {
 	clearTimer();
 	function setTimer();
 	})
 	
 	//clicking off the grid. 
 
 /*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 
 
 /*
 Features: When page starts reload
all cards are face down
when you click on card 1
	it remains face up
when you click on card 2
	it faces up 
		if card 2 matches card 1 remain face up 
								change background color
			or else face down
			
	if user matches the cards the counter restarts
	or else it keeps going until the third try
					if the third try and no matches
								loose game
*/
