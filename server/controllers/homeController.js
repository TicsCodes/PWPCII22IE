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

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Isaac Estrada',
    email: 'isaacitgam@gmail.com',
    url: 'https://github.com/TicsCodes/PWPCII22IE',
  });
};

export default {
  // action methods
  index,
  about,
};
