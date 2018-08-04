const Review = require('../models/review')
const {map, pick, propOr} = require('ramda')

const stats = async (req, res)=>{
  const reviews = await Review.find({airport_name: req.params.airport_name})
  res.json({
    airportName: req.params.airport_name,
    reviewCount: reviews.length,
    averageOverallRating: parseFloat((reviews.reduce((p,c)=>p + c.overall_rating, 0 ) / reviews.length).toFixed(1)),
    recommendationCount: reviews.filter(review=>review.recommended === 1).length
  })
}
const reviews = async (req, res)=>{
  const threshold = propOr(0, 'threshold', req.query)
  const reviews = await Review.find({
    airport_name: req.params.airport_name,
    overall_rating: {$gte: threshold}
  })
  res.json(map(pick(['date', 'overall_rating', 'recommended', 'author_country', 'content']), reviews))
}

module.exports = {stats, reviews}