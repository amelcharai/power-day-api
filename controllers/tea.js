const newTea = (req, res, next) => {
  res.json({ message: "POST new tea" })
}

module.exports = { newTea }
