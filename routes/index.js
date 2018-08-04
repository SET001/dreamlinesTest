const express = require('express');
const app = express.Router();
const aiports = require('./airports');
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const importer = require('../importer')
const Review = require('../models/review')
const {map, pick} = require('ramda')

app.get('/all/stats', async(req, res)=>{
  const reviews = await Review.aggregate([
    {
      $group: {
        _id: '$airport_name', 
        reviewCount: { $sum: 1 }
      }
    },{
    $project: {  
        _id: 0,
        airportName: "$_id",
        reviewCount: 1,
      }
    }
  ])
  res.send(reviews)
})

app.post('/import/csv', upload.single('file'), async (req, res, next)=>{
  const data = await importer(req.file.buffer.toString())
  await Review.insertMany(data)
  res.json('ok')
})

app.use(aiports)

module.exports = app