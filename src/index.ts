import express from "express";
import { config } from "dotenv";
import { GetPartnersControler } from "./controllers/get-partners/get-partners";
import { MongoGetPartnersRepository } from "./repositories/get-partners/mongo-get-partners";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();

  await MongoClient.connect();

  app.get("/partners", async (req, res) => {
    const mngoGetPartnersRepository = new MongoGetPartnersRepository();
    const getPartnersController = new GetPartnersControler(
      mngoGetPartnersRepository
    );
    const response = await getPartnersController.handle();
    res.send(response.body).status(response.statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
