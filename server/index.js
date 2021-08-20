const express = require("express");
const cors = require("cors");

const app = express();



app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
  
});

  app.get("/api/fortune", (req, res) => {
    const fortunes = ["A beautiful, smart and loving person will be coming into your life.",
  "A light heart carries you through all the hard times.",
  "A person is never too sick or old to learn.",
  "All your hard work will soon pay off.",
  "Congratulations! You are on your way.",
];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);

});

app.get("/api/pickupline", (req, res) => {
  const pickuplines = ["You may fall from the sky, you may fall from a tree, but the best way to fall... is in love with me.",
"Do you have a name or can I call you mine?",
"Can I follow you? Cause my mom told me to follow my dreams.",
"All your hard work will soon pay off.",
"Congratulations! You are on your way.",
];

let randomIndex = Math.floor(Math.random() * pickuplines.length);
let randomPickupline = pickuplines[randomIndex];
res.status(200).send(randomPickupline);

});
app.get("/api/inspirational", (req, res) => {
  const inspirationals = ["Be yourself; everyone else is already taken.",
"Be the change that you wish to see in the world.",
"Live as if you were to die tomorrow. Learn as if you were to live forever.",
"We are all in the gutter, but some of us are looking at the stars.",
"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
];

let randomIndex = Math.floor(Math.random() * inspirationals.length);
let randomInspirational = inspirationals[randomIndex];
res.status(200).send(randomInspirational);

});
app.get("/api/gymbro", (req, res) => {
  const gymbros = ["Don't give up on your dreams, or your dreams will give up on you.",
"A year from now you may have wished to start today.",
"Once you learn to quit, it becomes a habit.",
"Exercise is labor withour weariness.",
"Some people want it to happen, some wish it would happen, others make it happen.",
];

let randomIndex = Math.floor(Math.random() * gymbros.length);
let randomGymbro = gymbros[randomIndex];
res.status(200).send(randomGymbro);

});


app.listen(4000, () => console.log("Server running on 4000"));
