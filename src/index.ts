import express from "express";
import { config } from "dotenv";
import { GetPartnersControler } from "./controllers/get-partners/get-partners";
import { MongoGetPartnersRepository } from "./repositories/get-partners/mongo-get-partners";

config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/partners", async (req, res) => {
  const mngoGetPartnersRepository = new MongoGetPartnersRepository();
  const getPartnersController = new GetPartnersControler(
    mngoGetPartnersRepository
  );
  const response = await getPartnersController.handle();
  res.send(response.body).status(response.statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
