interface I2numbers {
  first: number;
  second: number;
}

function sum(params: I2numbers): number {
  return params.first + params.second;
}

test("adds 1 + 2 to equal 3", () => {
  const addArguments = {
    first: 1,
    second: 2,
  };
  expect(sum(addArguments)).toBe(3);
});

test("second test", () => {
  const addArguments = {
    first: 3,
    second: 2,
  };
  expect(sum(addArguments)).toBe(5);
});
