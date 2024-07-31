import {
  CreatePartnerParams,
  ICreatePartnerRepository,
} from "../../controllers/create-partner/protocols";
import { MongoClient } from "../../database/mongo";
import { Partner } from "../../models/partner";

export class MongoCreatePartnerRepository implements ICreatePartnerRepository {
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
