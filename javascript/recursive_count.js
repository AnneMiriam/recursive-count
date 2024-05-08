function recursiveCount(num = 0) {
  // based on example from MDN web docs
  if (num < 10) {
    console.log(num);
    recursiveCount(num + 1)
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
