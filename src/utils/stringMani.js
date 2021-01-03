export const removeHexEncodedChar = (str) => {
  var REG = new RegExp(/&#x([A-Za-z0-9]+);/g); // write your regex

  var matches = str.matchAll(REG);
  for (var match of matches) {
    // loop through the iterator returned by .matchAll()
    var charCode = parseInt(match[1], 16); // parse "27" into base 10 from base 16
    var char = String.fromCharCode(charCode); // lookup the char in the ASCII chart
    str = str.replace(match[0], char); // replace the full value "&#x27;" with the value from the ASCII lookup
  }

  return str;
};

export const removeString = (stringToRemove, ogString) => {
  const stringLength = stringToRemove.length;
  const removeIndex = ogString.indexOf(stringToRemove);
  const start = removeIndex + stringLength;
  if (ogString.includes(stringToRemove)) {
    return ogString.slice(start);
  } else return ogString;
};
