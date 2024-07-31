import express from "express";

import { MongoGetPartnersRepository } from "../repositories/get-partners/mongo-get-partners";
import { GetPartnersController } from "../controllers/get-partners/get-partners";
import { MongoCreatePartnerRepository } from "../repositories/create-partner/mongo-create-partners";
import { CreatePartnerController } from "../controllers/create-partner/create-partner";
import { MongoUpdatePartnerRepository } from "../repositories/update-partner/mongo-update-partner";
import { UpdatePartnerController } from "../controllers/update-partner/update-partner";
import { MongoDeletePartnerRepository } from "../repositories/delete-partner/mongo-delete-partner";
import { DeletePartnerController } from "../controllers/delete-partner/delete-partner";

const partnerRouter = express.Router();

partnerRouter.get("/partners", async (req, res) => {
  const mngoGetPartnersRepository = new MongoGetPartnersRepository();
  const getPartnersController = new GetPartnersController(
    mngoGetPartnersRepository
  );
  const response = await getPartnersController.handle();
  res.status(response.statusCode).send(response.body);
});

partnerRouter.post("/partners", async (req, res) => {
  const mongoCreatePartnerRepository = new MongoCreatePartnerRepository();
  const createPartnerController = new CreatePartnerController(
    mongoCreatePartnerRepository
  );

  const { body, statusCode } = await createPartnerController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

partnerRouter.patch("/partners/:id", async (req, res) => {
  const mongoUpdatePartnerRepository = new MongoUpdatePartnerRepository();
  const updatePartnerController = new UpdatePartnerController(
    mongoUpdatePartnerRepository
  );

  const { body, statusCode } = await updatePartnerController.handle({
    body: req.body,
    params: req.params,
  });

  res.status(statusCode).send(body);
});

partnerRouter.delete("/partners/:id", async (req, res) => {
  const mongoDeletePartnerRepository = new MongoDeletePartnerRepository();
  const deletePartnerController = new DeletePartnerController(
    mongoDeletePartnerRepository
  );

  const { body, statusCode } = await deletePartnerController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

export default partnerRouter;
