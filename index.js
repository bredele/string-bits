

module.exports = str => {
  var output = ''
  for (var i = 0, l = str.length; i < l; i++) {
    const binary = str[i].charCodeAt().toString(2)
    output += '00000000'.slice(binary.length) + binary
  }
  return output
}
