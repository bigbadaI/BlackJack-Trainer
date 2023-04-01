let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let shuffleDeck = [];
for (var i = 0; i < deck.length; i++) {
  shuffleDeck.push(deck[i] + ' of Hearts')
  shuffleDeck.push(deck[i] + ' of Spades')
  shuffleDeck.push(deck[i] + ' of Diamonds')
  shuffleDeck.push(deck[i] + ' of Clubs')
};

let randomCard = shuffleDeck[Math.floor(Math.random() * deck.length)];

console.log(randomCard);