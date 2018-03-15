const express = require('express');
const cors = require('cors');
const multer = require('multer');
const tinycolor = require('tinycolor2');

const { createCanvas } = require('./image');

const upload = multer();

const app = express();

app.use(cors());

app.post('/', upload.any(), function(req, res) {
  const color = tinycolor({
    r: req.body.r,
    g: req.body.g,
    b: req.body.b,
  });
  createCanvas()
    .then(buffer => {
      res.writeHead(200, {
        'Content-Type': 'image/jpeg'
      });
      res.write(buffer);
      res.end();
    });

});

app.listen('3000', function() {
  console.log('Listening on port 3000');
});
