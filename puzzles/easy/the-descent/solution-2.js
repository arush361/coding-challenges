while (true) {
  const totalMountains = 8;
  const mountains = Array(totalMountains)
                  .fill()
                  .map( mountain =>readline() )
                  .map(Number);
                  
  const mountainToShoot = mountains.indexOf(Math.max(...mountains));
  
  print(mountainToShoot);
}