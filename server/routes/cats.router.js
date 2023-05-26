const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
  console.log('jake');
    const query = `SELECT * FROM "pet" JOIN "pet_type"
    ON "pet"."pet_type_id"
    = "pet_type"."pet_id"
    WHERE "pet_type"."type" = 'Cat';
  `;
    pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`error: get all cats router`, err);
      res.sendStatus(500)
    })
  });

  module.exports = router;