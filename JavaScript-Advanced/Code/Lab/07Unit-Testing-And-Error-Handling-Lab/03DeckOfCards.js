function printDeckOfCards(cards) {
  function createCard(face, suit) {
    const faces = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ];

    const suits = {
      'S': '\u2660',
      'H': '\u2665',
      'D': '\u2666',
      'C': '\u2663',
    };

    if (!faces.includes(face)) {
      throw new TypeError('Invalid face');
    }

    if (!suits.hasOwnProperty(suit)) {
      throw new TypeError('Invalid suit');
    }

    const result = {
      face,
      suit,
      toString() {
        return this.face + suits[this.suit];
      }
    }
    return result;
  }

  let deck = [];
  for (const card of cards) {
    const face = card.slice(0, -1);
    const suit = card.slice(-1);
    try {
      deck.push(createCard(face, suit));
    } catch (error) {
      return console.log(`Invalid card: ${card}`);
    }
  }

  console.log(deck.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);