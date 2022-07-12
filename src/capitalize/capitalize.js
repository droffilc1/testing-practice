function capitalize(string) {
  let str = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    str+=string[i]
    
  }
  return str
}

module.exports = capitalize;