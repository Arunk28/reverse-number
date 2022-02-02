const reverse_array_number = require("../index");
test("reverse the array", async () => {
  expect(reverse_array_number([1, 2, 3, 4, 5])).toStrictEqual("5 4 3 2 1");
});

test("reverse the negative array", async () => {
  expect(reverse_array_number([-1, -2, -3, -4, -5])).toStrictEqual(
    "-5 -4 -3 -2 -1"
  );
});

test("reverse the string array", async () => {
  expect(
    reverse_array_number(["ARUN", "MEGHA", "SABARISH", "LAKSHMI"])
  ).toStrictEqual("LAKSHMI SABARISH MEGHA ARUN");
});
