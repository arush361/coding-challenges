const inputs = readline().split(' ');
const lightOfPowerX = parseInt(inputs[0]); // the X position of the light of power
const lightOfPowerY = parseInt(inputs[1]); // the Y position of the light of power
let thorInitialX = parseInt(inputs[2]); // Thor's starting X position
let thorInitialY = parseInt(inputs[3]); // Thor's starting Y position

while (true) {
  const remainingTurns = parseInt(readline());

  let position = "";
  if (thorInitialY < lightOfPowerY) {
    position += "S";
    thorInitialY++;
  }
  if (thorInitialY > lightOfPowerY) {
    position += "N";
    thorInitialY--;
  }

  if (thorInitialX < lightOfPowerX) {
    position += "E";
    thorInitialX++;
  }
  if (thorInitialX > lightOfPowerX) {
    position += "W";
    thorInitialX--;
  }
  print(position);
}