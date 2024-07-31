import { IGetPartnersRepository } from "../../controllers/get-partners/protocols";
import { MongoClient } from "../../database/mongo";
import { Partner } from "../../models/partner";

export class MongoGetPartnersRepository implements IGetPartnersRepository {
  async getPartners(): Promise<Partner[]> {
    const partners = await MongoClient.db
      .collection<Omit<Partner, "id">>("partners")
      .find({})
      .toArray();

    return partners.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
