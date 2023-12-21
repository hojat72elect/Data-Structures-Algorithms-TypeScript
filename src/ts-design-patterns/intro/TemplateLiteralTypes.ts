/**
 * Template literal types.
 * It allows you to combine types with each other (define new
 * types out of existing ones while  avoiding repetition).
 *
 * the type 'Suit' has only 4 possible values.
 */
type Suit = `${"Spade" | "Heart" | "Diamond" | "Club"}`;

type Rank = `${"2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "Jack" | "Queen" | "King" | "Ace"}`;
/**
 * Each one of cards you have in a deck  are of this type.
 * There are 52 possible values in this type.
 *
 * I personally believe it'd be far more efficient to define 'Deck' as a simple type and not a template literal type.
 */
type  Deck = `${Rank} of ${Suit}`;

const firstCard: Deck = "2 of Diamond";
const secondCard: Deck = "Jack of Club";
console.log(`my first card is ${firstCard} and second card is ${secondCard}.`)
