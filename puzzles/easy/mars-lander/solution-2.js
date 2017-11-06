const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
  let inputs = readline().split(' ');
  let landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
  let landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
while (true) {
  let inputs = readline().split(' ');
  let X = parseInt(inputs[0]);
  let Y = parseInt(inputs[1]);
  let horizontalSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
  let verticalSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
  let fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
  let rotationAngle = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
  let power = parseInt(inputs[6]); // the thrust power (0 to 4).

  // Write an action using print()
  // To debug: printErr('Debug messages...');

  // 2 integers: rotate power. rotate is the desired rotation angle (should be 0 for level 1), power is the desired thrust power (0 to 4).
  print('0 ' + (vSpeed <= -40 ? 4 : 0));
}