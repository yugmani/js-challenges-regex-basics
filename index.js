// Import stylesheets
import './style.css';

//Remove Special Characters from a String in JavaScript
// *******************************************************

function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
  //In its entirety, the regular expression matches all characters but lower and uppercase letters, digits and spaces.
}

console.log(removeSpecialCharacters("!@~yoog_ %'.,-Mani$ =#Gurung^&*+>?"));
// yoog Mani Gurung
console.log(removeSpecialCharacters('hello 123 !@#$%^WORLD?._'));
//hello 123 WORLD

//Alternative Solution
function removeSpecialAlternative(str) {
  return str.replace(/[^\w ]/g, '');
  //to match all lower and upper letters, digits and underscores.
}

console.log(removeSpecialAlternative("!@~yoog_ %'.,-Mani$ =#Gurung^&*+>?"));
// yoog_ Mani Gurung
console.log(removeSpecialAlternative('hello 123 !@#$%^WORLD?._'));
//hello 123 WORLD_

// **** summary  ****
// ***********************

// 'g' (global) flag to match all occurrences of the regex in the string and not just the first one.
// '[]' part denotes a character class
// string.replace(arg1, arg2); -> replaces the 'arg1' of the given 'string' by the 'arg2'.
// Note that the String.replace method does not change the original string, instead it returns a new string with the matches replaced.
// If you need to exclude other characters from being removed, add them between the square brackets of the regex. eg. str.replace(/[^a-zA-Z0-9 %]/g, ''); ->to match '%' character as well.
// However, note that the caret ^ symbol has to be the first character in the square brackets to mean "not the following characters".
// '^' the caret symbol means 'not the following characters'.

// Replace all Spaces from a String in JavaScript
// ************************************************

function removeSpacesFromString(str) {
  // return str.replace(' ', '');  // replaces only the first and last spaces ->output=>hello world
  // return str.replaceAll(' ', ''); //it will replace all occurrences . output->helloworld
  // return str.replace(/ /g, ''); //it replaces all occurrences of space
  // Note that this regular expression does not match tabs and new lines.
  // *******************************************************
  //  If you want to remove all spaces, tabs and new lines do this instead:
  return str.replace(/[\s]/g, '');  //helloworld
}

console.log(removeSpacesFromString(' hello world '));
//helloworld -> returns without any spaces
