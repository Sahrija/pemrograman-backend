const express = require('express');


const app = express();

app.use(express.json());

app.post("/student/:id", (req, res) => {
  const {id} = req.params
  res.send(id+ JSON.stringify(req.body.name));
});

app.listen(3000)
