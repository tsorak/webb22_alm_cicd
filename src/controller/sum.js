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

module.exports = sumController;
