/**
 * Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
  *      { country: 'Russia',  city: 'Moscow' },
  *      { country: 'Belarus', city: 'Minsk' },
  *      { country: 'Poland',  city: 'Warsaw' },
  *      { country: 'Russia',  city: 'Saint Petersburg' },
  *      { country: 'Poland',  city: 'Krakow' },
  *      { country: 'Belarus', city: 'Brest' }
  *    ]
  *                      =>
  *    [
  *      { country: 'Belarus', city: 'Brest' },
  *      { country: 'Belarus', city: 'Minsk' },
  *      { country: 'Poland',  city: 'Krakow' },
  *      { country: 'Poland',  city: 'Warsaw' },
  *      { country: 'Russia',  city: 'Moscow' },
  *      { country: 'Russia',  city: 'Saint Petersburg' }
  */
const sortCitiesArray = (arr) => {
  if(arr)
  {
    return arr.sort(function (a, b){
      const countryA = a.country.toUpperCase();
      const countryB = b.country.toUpperCase();
      if (countryA < countryB) 
      {
        return -1;
      }
      if (countryA > countryB) 
      {
        return 1;
      }
      if(countryA == countryB)
      {
        const cityA = a.city.toUpperCase();
        const cityB = b.city.toUpperCase();
        if(cityA < cityB)
        {
          return -1;
        }
        if (cityA > cityB) 
        {  
        return 1;
        }
      }
  // names must be equal
      return 0;
    });
  }
  else
  {
  throw new Error('array not given');
}};
/**
//  * Returns the number rounded to specified power of 10.
//  *
//  * @param {number} num
//  * @param {number} pow
//  * @return {number}
//  *
//  * @example:
//  *   1234, 0  => 1234
//  *   1234, 1  => 1230
//  *   1234, 2  => 1200
//  *   1234, 3  => 1000
//  *   1678, 0  => 1678
//  *   1678, 1  => 1680
//  *   1678, 2  => 1700
//  *   1678, 3  => 2000
//  */
// const roundToPowerOfTen = (num, pow) => {
//   throw new Error('Not implemented');
// };

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
const reverseInteger = (num) => {
  if(num)
  {
    const str = (num.toString());
    return str.split("").reverse().join("");
  }
  else
  {
  throw new Error('no numbers are given');
}};

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the following rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
// const timespanToHumanString = (starpDate, endDate) => {
//   if(starpDate && endDate)
//   {
//     console.log('both param are given');
//     console.log(endDate.Date)
//     console.log(starpDate)
//     console.log(endDate - starpDate);
//   }
//   else
//   {
//   throw new Error('Not implemented');
// }};
// timespanToHumanString(Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200'))
/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */

class Rectangle {
  constructor(width, height) {
    if(width && height)
    {
      this.width = width;
      this.height = height;
      this.getArea = () => width * height;
    }
    else
    {
    throw new Error('width of height not given, cannot create new Rectangle');
  }}
}
/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
// const findFirstSingleChar = (str) => {
//   if(str)
//   {
//     for (i=0; i<str.length; i++) 
//     {
//       if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
//         console.log(`repeats`);
//         return;
//       }
//       else{
//         console.log(`does not repeat`);
//         return;
//       }
//       console.log()
//     }
//   }
//   else
//   {
//   throw new Error('No string is given');
// }};
// console.log(findFirstSingleChar('baard'));
/**
 * Returns the password validator regex.
 * Regex will validate a password to make sure it meets the follwing criteria:
 *  - At least specified characters long (argument minLength)
 *  - Contains a lowercase letter
 *  - Contains an uppercase letter
 *  - Contains a number
 *  - Valid passwords will only be alphanumeric characters.
 *
 * @param {number} minLength
 * @return {Regex}
 *
 * @example
 *   let validator = getPasswordValidator(6);
 *   'password'.match(validator)  => false
 *   'Pa55Word'.match(validator)  => true
 *   'PASSw0rd'.match(validator)  => true
 *   'PASSW0RD'.match(validator)  => false
 *   'Pa55'.match(validator) => false
 */
const getPasswordValidator = (minLength) => {
  throw new Error('Not implemented');
};

module.exports = {
  sortCitiesArray,
  //roundToPowerOfTen,
  reverseInteger,
  //timespanToHumanString,
  Rectangle,
  //findFirstSingleChar,
  getPasswordValidator,
};
