
function sort(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] > str[j]) {
        let temp = str[j];
        str = str.slice(0, j) + str[i] + str.slice(j + 1);
        str = str.slice(0, i) + temp + str.slice(i + 1);
      }
    }
  }
  return str;
}
function isAnagram(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return undefined;
  }
  
  let v1 = sort(str1.toLowerCase);
  let v2 = sort(str2.toLowerCase);
  if(v1===v2) return true
  else return false
}

module.exports = isAnagram;
