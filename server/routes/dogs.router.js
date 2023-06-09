const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT *
  FROM pet
  WHERE pet_type_id = (
    SELECT pet_id FROM pet_type WHERE type = 'dog'
  );`;


  pool.query(query)
    .then(result => {
      res.send(result.rows);
      console.log('test route');
    })
    
    .catch(error => {
      console.log('Error: get all doga router', error);
      res.sendStatus(500);
    });
});

module.exports = router;