import express from "express";
import { config } from "dotenv";
import { GetPartnersControler } from "./controllers/get-partners/get-partners";
import { MongoGetPartnersRepository } from "./repositories/get-partners/mongo-get-partners";
import { MongoClient } from "./database/mongo";
import { MongoCreatePartnerRepository } from "./repositories/create-partner/mongo-create-partners";
import { CreatePartnerController } from "./controllers/create-partner/create-partner";

const main = async () => {
  config();

  const app = express();
  app.use(express.json());

  await MongoClient.connect();

  app.get("/partners", async (req, res) => {
    const mngoGetPartnersRepository = new MongoGetPartnersRepository();
    const getPartnersController = new GetPartnersControler(
      mngoGetPartnersRepository
    );
    const response = await getPartnersController.handle();
    res.status(response.statusCode).send(response.body);
  });

  app.post("/partners", async (req, res) => {
    const mongoCreatePartnerRepository = new MongoCreatePartnerRepository();
    const createPartnerController = new CreatePartnerController(
      mongoCreatePartnerRepository
    );

    const { body, statusCode } = await createPartnerController.handle({
      body: req.body,
    });
    res.status(statusCode).send(body);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
