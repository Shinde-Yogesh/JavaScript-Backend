
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  // new Date("June 20, 2023 11:13:00");
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  // console.log(day);
  let type = "Snoow falls";
  let adv = "Winner is coming";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
