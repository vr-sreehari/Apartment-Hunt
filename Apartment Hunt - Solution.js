function apartmentHunting(blocks, reqs) {
  // Write your code here.
  let minDistance = Infinity;
  let optimalBlock = -1;
  for (let i = 0; i < blocks.length; i++) {
    let maxDistance = 0;
    for (let j = 0; j < reqs.length; j++) {
      if (blocks[i][reqs[j]]) {
        distance = 0;
      } else {
        distance = Infinity;
        for (let k = i + 1; k < blocks.length; k++) {
          if (blocks[k][reqs[j]]) {
            distance = Math.min(distance, k - i);
          }
        }
        for (let k = i - 1; k >= 0; k--) {
          if (blocks[k][reqs[j]]) {
            distance = Math.min(distance, i - k);
          }
        }
      }
      maxDistance = Math.max(maxDistance, distance);
    }
    if (maxDistance < minDistance) {
      minDistance = maxDistance;
      optimalBlock = i;
    }
  }
  return optimalBlock;
}
const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];
const reqs = ["gym", "school", "store"];
const optimalBlock = apartmentHunting(blocks, reqs);
console.log(optimalBlock);

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
