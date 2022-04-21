const R = require("ramda");

const testUser = {
  id: 5,
  name: "jdannel",
};

// idEquals is a function expecting two values to compare
// A value to test against, and an object to get 'id' from
// Could make for a useful, reusable function
const idEquals = R.propEq("id");

console.log(idEquals(3, testUser));
console.log(idEquals(5, testUser));
