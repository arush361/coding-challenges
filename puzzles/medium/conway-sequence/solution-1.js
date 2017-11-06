let sequence = [parseInt(readline())];
let maxIteration = readline();

let iteration = 1;

while (iteration < maxIteration) {
  let next = [];
  let digitCount = 1;
  printErr(sequence);
  for (let i = 0; i < sequence.length; i++) {
    if (sequence.length === i + 1) {
      next.push(digitCount);
      next.push(sequence[i]);
    } else if (sequence[i] === sequence[i + 1]) {
      digitCount++;
    } else {
      next.push(digitCount);
      next.push(sequence[i]);
      digitCount = 1;
    }
  }
  sequence = next;
  iteration++;
}

printErr(sequence.join(' '));
print(sequence.join(' '));