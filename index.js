import { App } from "@tinyhttp/app";

const app = new App();

app
  .use(json())
  .post("/", (req, res) => {
    console.log(req.body);

    res.send(`hehe`);
  })
  .listen(process.env.PORT || 3000);
