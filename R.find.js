const R = require("ramda");

const users = [
  {
    id: 1,
    name: "jonathan",
  },
  {
    id: 2,
    name: "clark",
  },
  {
    id: 3,
    name: "kowsheek",
  },
];

const clarkNormal = users.find((u) => u.id === 2);

// Ramda.find takes a function + data structure and gets current el passed to it
// Ramda functions are auto-curried so we can pass args any way we want
const clarkRamda = R.find(R.propEq("id", 2))(users);
const _clarkRamda = R.find(R.propEq("id", 2), users);

console.log(clarkNormal);
console.log(clarkRamda);
console.log(_clarkRamda);
// { id: 2, name: 'clark' }
// { id: 2, name: 'clark' }
// { id: 2, name: 'clark' }

// Use our idEquals function from R.propEq
const idEquals = R.propEq("id");
const __clarkRamda = R.find(idEquals(2), users);
console.log(__clarkRamda);
// { id: 2, name: 'clark' }
