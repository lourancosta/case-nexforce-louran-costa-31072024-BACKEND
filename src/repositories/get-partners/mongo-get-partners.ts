import { IGetPartnersRepository } from "../../controllers/get-partners/protocols";
import { MongoClient } from "../../database/mongo";
import { Partner } from "../../models/partner";
import { MongoPartner } from "../mongo-protocols";

export class MongoGetPartnersRepository implements IGetPartnersRepository {
  async getPartners(): Promise<Partner[]> {
    const partners = await MongoClient.db
      .collection<MongoPartner>("partners")
      .find({})
      .toArray();

    return partners.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
