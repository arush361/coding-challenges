const nTemperatures = readline();
const temperatures = readline().split(' ');

const sortedTemperatures = temperatures.sort((prev, next) => Math.abs(prev) - Math.abs(next) || next - prev);

const closestTemperature = sortedTemperatures.shift() || 0;

print(closestTemperature);