// URL: Get /
const index = (req, res) => {
  // Calculando emoji
  const emojiDataset = ['🐸', '🐲', '🐈‍⬛', '🐾', '🦬', '🐉', '🦖'];
  const emoji = emojiDataset[Math.floor(Math.random() * emojiDataset.length)];

  // view Models
  const viewModel = {
    title: 'Index Controller Working!!!!',
    author: 'Isaac Estrada',
    emoji,
  };
  res.render('index', viewModel);
};

export default {
  // action methods
  index,
};
