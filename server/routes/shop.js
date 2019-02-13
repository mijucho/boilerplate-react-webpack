const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
     db.displayCakes()
    .then ((cakes) => {
      res.json(cakes)
    })
    })

    
// router.get('/gallery/:id'), (req, res) => {
//         const id =req.params.id
//       return db.displayCake(id)
//       .then ((result) => {
//           res.json(result[0])
//       })

//     }

module.exports = router