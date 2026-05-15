const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const games = [
  {
    id: 1,
    title: 'Pulse Runner',
    description: 'Corra no universo neon e dispare combos enquanto desvia de lasers.',
    genre: 'Ação'
  },
  {
    id: 2,
    title: 'Cyber Quest',
    description: 'Resolva enigmas em uma megacidade futurista cheia de segredos.',
    genre: 'Aventura'
  },
  {
    id: 3,
    title: 'Retro Defense',
    description: 'Monte defesas e proteja o hub de inimigos digitais.',
    genre: 'Estratégia'
  },
  {
    id: 4,
    title: 'Neon Drift',
    description: 'Pilote por pistas eletrizantes e vença a corrida da madrugada.',
    genre: 'Corrida'
  }
];

app.use(express.static(path.join(__dirname)));

app.get('/api/games', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Lista de jogos carregada da API',
    data: games
  });
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
