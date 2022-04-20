const addTo = (passed) => (inner) => passed + inner

const addThree = addTo(3)

console.log(addThree(50))