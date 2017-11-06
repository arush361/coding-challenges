const nTemperatures = parseInt(readline()); // the number of temperatures to analyse
const inputs = readline().split(' ');
const temperatures = inputs.map(function (temp) {
  return parseInt(temp);
});

let closestTemperature = 5526;

if (!nTemperatures) {
  closestTemperature = 0;
} else {
  for (let i = 0; i < nTemperatures; i++) {
    const currentTemp = temperatures[i];
    if (Math.abs(currentTemp) < Math.abs(closestTemperature)) {
      closestTemperature = currentTemp;
    } else if (Math.abs(currentTemp) === Math.abs(closestTemperature)) {
      closestTemperature = (closestTemperature > currentTemp) ? closestTemperature : currentTemp;
    }
  }
}

print(closestTemperature);