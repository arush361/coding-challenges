const LON = getFloat(readline());
const LAT = getFloat(readline());
const N = parseInt(readline());

function getDistance(lonA, lonB, latA, latB) {
  const x = (lonB - lonA) * Math.cos((latA + latB) / 2);
  const y = (latB - latA);
  return Math.sqrt((x * x) + (y * y)) * 6371;
}

function getDefib(lonA, latA, defib) {
  return [defib[1], getDistance(lonA, getFloat(defib[4]), latA, getFloat(defib[5]))];
}

function getFloat(string) {
  return parseFloat(string.replace(/\,/, '\.'));
}

const closestDefib = new Array(N)
  .fill()
  .map(() => readline().split(';'))
  .map((defib) => getDefib(LON, LAT, defib))
  .sort((prev, next) => prev[1] - next[1])
  .shift()[0];

print(closestDefib);