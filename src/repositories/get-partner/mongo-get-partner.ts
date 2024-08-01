import { ObjectId } from "mongodb";
import { MongoClient } from "../../database/mongo";
import { Partner } from "../../models/partner";
import { MongoPartner } from "../mongo-protocols";
import { IGetPartnerByIdRepository } from "../../controllers/get-partner/protocols";

export class MongoGetPartnerByIdRepository
  implements IGetPartnerByIdRepository
{
  async getPartner(id: string): Promise<Partner> {
    const partner = await MongoClient.db
      .collection<MongoPartner>("partners")
      .findOne({ _id: new ObjectId(id) });

    if (!partner) {
      throw new Error("Partner not founded.");
    }

    const { _id, ...rest } = partner;
    return { id: _id.toHexString(), ...rest };
  }
}
