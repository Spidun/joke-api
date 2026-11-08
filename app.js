const express = require('express');
const app = express();
const port = 3000;

const HaJokes = [{
    id: 1,
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!"
}, 
{
    id: 2,
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!"
},
{
    id: 3,
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack up!"
},
{
    id: 4,
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!"
},
{
    id: 5,
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!"
},
{
    id: 6,
    setup: "What do you call cheese that isn't yours?",
    punchline: "Nacho cheese!"
},
{
    id: 7,
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!"
},
{
    id: 8,
    setup: "What do you call a sleeping bull?",
    punchline: "A bulldozer!"
},
{
    id: 9,
    setup: "Why did the math book look so sad?",
    punchline: "Because it had too many problems!"
},
{
    id: 10,
    setup: "What do you call a fish wearing a bowtie?",
    punchline: "Sofishticated!"
}
]

app.use(express.static('public'));

app.get('/api/v1/random-joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * HaJokes.length);
  const randomJoke = HaJokes[randomIndex];
  
  res.json(randomJoke);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
