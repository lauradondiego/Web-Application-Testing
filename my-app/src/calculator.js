export const add = (numOne = 0, numTwo = 0) => {
  // the num=0 means if you have a single number like 8, and it comes
  // in undefined, then one of the numbers could be 0 and test will pass
  // with single number like 8 in this example
  return numOne + numTwo;
};

export const subtract = (numOne, numTwo) => {
  return numOne - numTwo;
};
