while (true) {
  let highest = 0;
  let mountainToShoot = 0;
  for (let i = 0; i < 8; i++) {
    let mountainHeight = parseInt(readline());
    if (highest < mountainHeight) {
      highest = mountainHeight;
      mountainToShoot = i;
    }
  }
  print(mountainToShoot);
}