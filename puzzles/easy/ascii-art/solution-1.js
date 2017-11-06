const width = parseInt(readline());
const height = parseInt(readline());
const text = readline().toUpperCase();

const firstAlphabetIndexAscii = 65;

for (let i = 0; i < height; i++) {
  const row = readline();
  let output = '';
  for (let j = 0; j < text.length; j++) {
    let index = text.charCodeAt(j) - firstAlphabetIndexAscii;

    if (index < 0 || index >= 26) {
      index = 26;
    }

    output += row.slice(index * width, (index * width) + width);
  }
  
  print(output);
}