const R = require("ramda");

// Variables everywhere
const toSlugSimple = (input) => {
  const words = input.split(" ");
  const lowercase = words.map((word) => word.toLowerCase());
  const slug = lowercase.join("-");
  const encoded = encodeURIComponent(slug);
  return encoded;
};

const simpleSlug = toSlugSimple("This is a simple slug");
console.log(simpleSlug);
// 'this-is-a-simple-slug

/***************/

// Better
const toSlugImproved = (input) =>
  encodeURIComponent(
    input
      .split(" ")
      .map((str) => str.toLowerCase())
      .join("-")
  );

const improvedSlug = toSlugImproved("This is a simple slug");
console.log(improvedSlug);
// 'this-is-a-simple-slug

/***************/

// Ramda functions are auto curried so we can pass arguments any way we want
// This is cool, but super ugly and way harder to read
const toSlugRamda = (input) =>
  encodeURIComponent(R.join("-", R.map(R.toLower, R.split(" ", input))));

const toSlugRamda2 = (input) =>
  encodeURIComponent(R.join("-")(R.map(R.toLower)(R.split(" ")(input))));

const ramdaSlug = toSlugRamda("This is a simple slug");
const ramdaSlug2 = toSlugRamda2("This is a simple slug");
console.log(ramdaSlug);
console.log(ramdaSlug2);
// 'this-is-a-simple-slug
// 'this-is-a-simple-slug

/***************/

// Currying is awesome because it allows functions to be COMPOSABLE!
const toSlugComposed = (input) =>
  R.compose(
    encodeURIComponent,
    R.join("-"),
    R.map(R.toLower),
    R.split(" ")
  )(input);

console.log(toSlugComposed("This is an awesome slug"));
// this-is-an-awesome-slug

// We don't need to create a function that accepts an input
// Result of compose is already a function waiting for an argument
// Now it's way easier to read, a list of things we want to do to what is passed in
const toSlugComposedImproved = R.compose(
  encodeURIComponent,
  R.join("-"),
  R.map(R.toLower),
  R.split(" ")
);

console.log(toSlugComposedImproved("This is an even more awesome slug"));
// this-is-an-even-more-awesome-slug
