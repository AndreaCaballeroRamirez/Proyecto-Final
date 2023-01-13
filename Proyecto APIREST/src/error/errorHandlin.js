function errorHandlin(err, req, res, next) {
  res.status(500).json({ mensagge: err.mensagge });
}
module.exports = errorHandlin;
