const reverse_number = require("../index");
test("reverse the array", async () => {
  expect(reverse_number([1, 2, 3, 4, 5])).toStrictEqual("5 4 3 2 1");
});

test("reverse the negative array", async () => {
  expect(reverse_number([-1, -2, -3, -4, -5])).toStrictEqual("-5 -4 -3 -2 -1");
});
