import { ObjectId } from "mongodb";
import { IDeletePartnerRepository } from "../../controllers/delete-partner/protocols";
import { MongoClient } from "../../database/mongo";
import { Partner } from "../../models/partner";
import { MongoPartner } from "../mongo-protocols";

export class MongoDeletePartnerRepository implements IDeletePartnerRepository {
  async deletePartner(id: string): Promise<Partner> {
    const partner = await MongoClient.db
      .collection<MongoPartner>("partners")
      .findOne({ _id: new ObjectId(id) });

    if (!partner) {
      throw new Error("Partner not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("partners")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Partner not deleted.");
    }

    const { _id, ...rest } = partner;
    return { id: _id.toHexString(), ...rest };
  }
}
