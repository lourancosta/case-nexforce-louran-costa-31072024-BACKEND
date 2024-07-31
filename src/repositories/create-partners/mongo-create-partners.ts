import {
  CreatePartnerParams,
  ICreatePartnerRepository,
} from "../../controllers/create-partner/create-partner";
import { MongoClient } from "../../database/mongo";
import { Partner } from "../../model/partner";

export class MongoCreatePartner implements ICreatePartnerRepository {
  async createPartner(params: CreatePartnerParams): Promise<Partner> {
    const { insertedId } = await MongoClient.db
      .collection("partners")
      .insertOne(params);

    const partner = await MongoClient.db
      .collection<Omit<Partner, "id">>("partners")
      .findOne({ _id: insertedId });

    if (!partner) {
      throw new Error("Partner not created.");
    }

    const { _id, ...rest } = partner;
    return { id: _id.toHexString(), ...rest };
  }
}
