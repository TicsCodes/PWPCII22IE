var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let emojiDataset = ['🐸','🐲', '🐈‍⬛', '🐾', '🦬', '🐉','🦖' ];
  let emoji = emojiDataset[Math.floor(Math.random()* emojiDataset.length)];

  res.render('index', 
  {
  title: 'PWPCII-22',
  author: 'IsaacE',
  emoji
});
});

module.exports = router;
