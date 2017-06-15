const rates = require('./rates')

const compare = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

const calculateRate = (req, res, next) => {
  const weight = +req.query.weight
  const type = req.query.type

  const selectedRates = rates[type]
  const sorted = Object.keys(selectedRates).map(key=>+key).sort(compare)

  const weightClass = sorted.find((cur) => weight <= cur)

  res.rate = weightClass ? selectedRates[weightClass] : "Too heavy"

  next()
}

module.exports = calculateRate