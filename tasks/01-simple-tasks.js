/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
const getStringFromTemplate = (firstName, lastName) => {
  if(firstName && lastName){
    return (`Hello, ${firstName} ${lastName}!`)
  }
  else{
    throw new Error('firstName or lastName is not given');
}};

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
const removeLeadingAndTrailingWhitespaces = (value) => {
  if(value){
  return (value.trim());
}
else{
  throw new Error('no value given');
}};
/**
* Returns a string that repeated the specified number of times.
*
* @param {string} value
* @param {string} count
* @return {string}
*
* @example
*   'A', 5  => 'AAAAA'
*   'cat', 3 => 'catcatcat'
*/
const repeatString = (value, count) => {
  if(repeatString){
  return(value.repeat(count));
}
else{
  throw new Error('no value given');
}};
/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
const cards = [
  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
]
const getCardId = (value) =>{
  if(value)
  {
    cards.filter(function (item) 
    {
      if(item === value)
      {
        return cards.indexOf(item);
      }
    })
  }
  else
  {
  throw new Error('value not given');
  }};
/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
// const getDistanceBetweenPoints = (x1, y1, x2, y2) => {
//   if(x1 && y1)
//   {();
//     const xDiff = x1 - x2; 
//     const yDiff = y2 - y2;
//     console.log(Math.sqrt(xDiff * xDiff + yDiff * yDiff));
//   }
//   else
//   {
//     throw new Error('Not implemented');
//   }
// };
// getDistanceBetweenPoints((-5,0) (10,-10));
/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
const findElement = (arr, value) => {
  if(arr && value)
  {
    const index = (element) => element === value;
    return arr.findIndex(index);
  }
  else
  {
  throw new Error('not all parameters are given');
}};

/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
const getArrayOfPositives = (arr) => {
  if(arr)
  { 
    const positive = (value) => {
      return value > 0;
    };
    return arr.filter(positive);
  }
  else
  {
  throw new Error('array is not given');
}};

module.exports = {
  getStringFromTemplate,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  getCardId,
  //getDistanceBetweenPoints,
  findElement,
  getArrayOfPositives,
};
