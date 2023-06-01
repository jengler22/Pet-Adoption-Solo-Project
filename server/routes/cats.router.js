const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT *
  FROM pet
  WHERE pet_type_id = 1;`;

  

  pool.query(query)
    .then(result => {
      res.send(result.rows);
      console.log('test route');
    })
    
    .catch(err => {
      console.log('Error: get all cats router', err);
      res.sendStatus(500);
    });
});

module.exports = router;

  