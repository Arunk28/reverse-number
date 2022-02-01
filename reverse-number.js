const reverseNumber = (_number) => {
  let number = [];
  let N = _number.length;
  while (N > 0) {
    number.push(_number[N - 1]);
    N--;
  }
  return number.join(" ");
};

module.exports = reverseNumber;
