import { App } from "@tinyhttp/app";
import { json } from "milliparsec";

const app = new App();

app
  .post("/", (req, res) => {
    console.log(req.body);

    res.send(`hehe`);
  })
  .listen(process.env.PORT || 3000);
