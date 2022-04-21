const R = require("ramda");

const wasBornInCanada = (person) => person.birthCountry === "Canada";
const wasNaturalized = (person) => Boolean(person.naturalizationDate);
const isVotingAge = (person) => person.age > 18;
const isCitizen = (person) => wasBornInCanada(person) || wasNaturalized(person);
const isEligibleToVote = (person) => isVotingAge(person) && isCitizen(person);

const testUser = {
  age: 20,
  birthCountry: "Canada",
};

console.log(isEligibleToVote(testUser));
// true

// Now with Ramda!
const _wasBornInCanada = R.propEq("birthCountry", "Canada");

// 'either' and 'both' are curried
// They return a function waiting for an argument to pass to both functions
const _isCitizen = R.either(_wasBornInCanada, wasNaturalized);
const _isEligibleToVote = R.both(isVotingAge, _isCitizen);

console.log(_isEligibleToVote(testUser));
// true
