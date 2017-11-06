const totalOfHorses = parseInt(readline());
let strengths = [];
for (let i = 0; i < totalOfHorses; i++) {
  const pi = parseInt(readline());
  strengths.push(pi);
}

const differences = strengths
  .sort((prev, next) => prev - next) // sort strengths desc
  .map((current, index, strengths) => Math.abs(current - strengths[index - 1])).slice(1) // return differences bewteen each close strength
  .sort((prev, next) => prev - next); // sort differences asc

// print the first value in differences
print(differences.shift());