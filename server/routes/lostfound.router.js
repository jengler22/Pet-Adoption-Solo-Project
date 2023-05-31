const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const query = `SELECT * FROM lost_found ORDER BY "date" DESC`;
  pool.query(query)
  .then( result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log(`error: get all lost pets`, error);
    res.sendStatus(500)
  })
});

router.post('/', (req, res) => {
  console.log('oh boy found a problem');
  // const date = req.body.date;
  // const location = req.body.location;
  // const description = req.body.description;
  const queryText = `INSERT INTO "lost_found" ("date", "location", "description") 
                     VALUES ($1, $2, $3)`;
  pool.query(queryText, [req.body.date, req.body.location, req.body.description])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in POST:', error);
      res.sendStatus(500);
    });
});
// router.post('/', (req, res) => {
//   const id = req.params.id;
//   const date = req.body.date;
//   const location = req.body.location;
//   const description = req.body.description;
//   const queryText = `INSERT INTO "lost_found" ("date") ("location") ("description")
//   VALUES ($1) WHERE "id" = $2;`;
//   pool.query(queryText, [id, date, location, description]).then((result) => {
//     res.sendStatus(200);
//   }).catch((error) => {
//     console.log('error in POST1');
//     res.sendStatus(500);
//   });
// });
router.put('/', (req, res) => {
  console.log('error in puts');
  const id = req.params.id;
  const { date, location, description } = req.body;
  
  const queryText = `UPDATE "lost_found" SET "date" = $1, "location" = $2,
  "description" = $3 WHERE "id" = $4;`;
  pool.query(queryText, [date, location, description, id])
    .then(() => {
      console.log('shiiiit');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in PUT:', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  console.log('error in delete 1');
  const deleteId = req.params.id;
  let queryText = `DELETE FROM "lost_found" WHERE "id"=$1;`;
  pool.query(queryText, [deleteId]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log(`Error in DELETE ${error}`);
      res.sendStatus(500);
  });
});




module.exports = router;
