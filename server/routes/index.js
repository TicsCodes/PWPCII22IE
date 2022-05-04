const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const emojiDataset = ['🐸', '🐲', '🐈‍⬛', '🐾', '🦬', '🐉', '🦖'];
  const emoji = emojiDataset[Math.floor(Math.random() * emojiDataset.length)];

  res.render('index', {
    title: 'PWPCII-22',
    author: 'IsaacE',
    emoji,
  });
});

module.exports = router;
