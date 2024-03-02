const express = require('express');
const bodyParser = require('body-parser');
const { createPool } = require('mysql');
const path = require('path');

const port = 3000;
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "collegedb"
});

const app = express();
app.use(bodyParser.json());

app.get('/api/college/:college_id', (req, res) => {
  const collegeId = req.params.college_id; 
  if (isNaN(collegeId)) {
    return res.status(400).json({ error: 'Invalid college ID'});
  }

  pool.query('SELECT * FROM college_data WHERE college_id = ?', [collegeId], (err, result, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error'});
    }

    if (result.length === 0) {
      return res.status(404).json({ error: 'College ID not found'});
    }

 
    res.status(200).json(result[0]);
  });
  app.get('/', (req ,res)=> {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
});
 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});