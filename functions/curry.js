const curry = (fn) => {
  const arity = fn.length;
  return function callWithAllArguments(...args) {
    if (args.length >= arity) {
      // If all args have been supplied, call the function with them
      return fn(...args);
    } else {
      // Get more arguments from the next function call
      return function acceptMoreArguments(...moreArgs) {
        const newArgs = args.concat(moreArgs);
        // Call outer function recursively with new args
        return callWithAllArguments(...newArgs);
      };
    }
  };
};

const addFourNumbers = (a, b, c, d) => a + b + c + d;

// Curry the function so we can pass arguments however we want
const curriedAdd = curry(addFourNumbers);

console.log(curriedAdd(3, 5, 7, 9));
// 24, not too special

const waitFor2Args = curriedAdd(3, 5);
const _waitFor2Args = curriedAdd(3)(5);

console.log(waitFor2Args(7, 9));
// 24

console.log(_waitFor2Args(7)(9));
// 24

const partialAdd = curriedAdd(3);
// Waits for 3 more arguments

console.log(partialAdd(5, 7, 9));
// 24
