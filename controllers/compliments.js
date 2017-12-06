const express = require('express')
const Compliment = require('../db/schema')
const router = express.Router()


router.get('/', (req, res) => {
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  var num = [Math.floor(Math.random() * colors.length)]
  Compliment.aggregate({ $sample: { size: 1 } })
    .then((compliments) => {
      res.render('compliment-show', {
        compliment: compliments[0],
        color: colors[num]
      })
    })
})



module.exports = router