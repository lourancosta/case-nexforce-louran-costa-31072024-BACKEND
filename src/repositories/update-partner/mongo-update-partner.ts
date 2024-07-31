import { ObjectId } from "mongodb";
import {
  IUpdatePartnerRepository,
  UpdatePartnerParams,
} from "../../controllers/update-partner/protocols";
import { MongoClient } from "../../database/mongo";
import { Partner } from "../../models/partner";

export class MongoUpdatePartnerRepository implements IUpdatePartnerRepository {
  async updatePartner(
    id: string,
    params: UpdatePartnerParams
  ): Promise<Partner> {
    await MongoClient.db.collection("partners").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const partner = await MongoClient.db
      .collection<Omit<Partner, "id">>("partners")
      .findOne({ _id: new ObjectId(id) });

    if (!partner) {
      throw new Error("Partner not updated.");
    }

    const { _id, ...rest } = partner;
    return { id: _id.toHexString(), ...rest };
  }
}
