function textToBinary(text) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    let binary = text.charCodeAt(i).toString(2);
    if (binary.length < 7) {
      binary = `0${binary}`;
    }
    output += binary;
  }
  return output;
}

const encode = {
  "0": "00",
  "1": "0"
}

const binaryText = textToBinary(readline());
let currentSign = binaryText[0];
let result = `${encode[currentSign]} 0`;

for (let i = 1; i < binaryText.length; i++) {
  const nextBit = binaryText[i];
  result += (nextBit != currentSign) ? ` ${encode[nextBit]} 0` : '0';
  currentSign = nextBit;
}

print(result);