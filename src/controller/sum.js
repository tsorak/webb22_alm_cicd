function sumController(req, res) {
  let { a, b } = req.query;
  [a, b] = [Number(a), Number(b)];

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({
      error: "Parameters 'a' and 'b' must be valid numbers."
    });
    return;
  }

  const result = sum(a, b);
  res.json({ sum: result });
}

function sum(a, b) {
  return a + b;
}

function verySuspiciousUnTestedFunction() {
  sum(1, 2); // 3
  sum(2, 3); // 5
  sum(3, 5); // 8
  sum(5, 8); // 13
  sum(8, 13); // 21
  sum(13, 21); // 34
  sum(21, 34); // 55
  sum(34, 55); // 89
  sum(55, 89); // 144
  sum(89, 144); // 233
  sum(144, 233); // 377
  sum(233, 377); // 610
  sum(377, 610); // 987
  sum(610, 987); // 1597
  sum(987, 1597); // 2584
  sum(1597, 2584); // 4181
  sum(2584, 4181); // 6765
  sum(4181, 6765); // 10946
  sum(6765, 10946); // 17711
  sum(10946, 17711); // 28657
  sum(17711, 28657); // 46368
  sum(28657, 46368); // 75025
  sum(46368, 75025); // 121393
}

if (1 === Date.now()) verySuspiciousUnTestedFunction();

module.exports = sumController;
