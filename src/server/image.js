const { fromNodeback } = require('folktale/concurrency/task');
const gm = require('gm');

const w = 2970;
const h = 2100;

function createCanvas(color, title) {
  return new Promise((resolve, reject) => {
    gm(h, w, '#ffffff')
      .font('/usr/share/fonts/TTF/DejaVuSans.ttf')
      .drawLine(200, 0, 200, h)
      .drawLine(800, 0, 800, h)
      .drawText(1200, 1200, 'BLABLA Test')
      .toBuffer('JPG', function(err, buffer) {
        if (err) reject(err);
        resolve(buffer);
      });
  });
}

module.exports = {
  createCanvas
};
