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

//choose random fortune
app.get("/api/fortune", function(req, res) {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A good time to finish up old tasks."];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});


//submit dino url
app.post("/api/submit", function(req, res) {
  let userDino = '';
  userDino += 'url(' + req.body.url + ')';
  res.status(200).send(userDino);
})


app.listen(4000, () => console.log("Server running on 4000"));


//change dino pic button
app.put("/api/refresh/:id", function(req, res) {
  if (req.body.color !== 'purple') {
    req.body.color = 'purple';
  }
  res.status(200).send(req.body.color);

})


//delete dino pic button
app.delete("/api/:id", function(req, res) {
  res.status(200).send(req.id);
})



