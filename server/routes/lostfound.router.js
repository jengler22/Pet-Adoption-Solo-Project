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
  .catch(err => {
    console.log(`error: get all lost pets`, err);
    res.sendStatus(500)
  })
});

router.post('/:id', (req, res) => {
  const date = req.body.date;
  const location = req.body.location;
  const description = req.body.description;
  const queryText = `INSERT INTO "lost_found" ("date", "location", "description") 
                     VALUES ($1, $2, $3)`;
  pool.query(queryText, [date, location, description])
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
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { date, location, description } = req.body;
  const queryText = `UPDATE "lost_found" SET "date" = $1, "location" = $2,
  "description" = $3 WHERE "id" = $4;`;
  pool.query(queryText, [date, location, description, id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in PUT:', error);
      res.sendStatus(500);
    });
});



module.exports = router;
