import { IGetPartnersRepository } from "../../controllers/get-partners/protocols";
import { Partner } from "../../model/partner";

export class MongoGetPartnersRepository implements IGetPartnersRepository {
  async getPartners(): Promise<Partner[]> {
    return [
      {
        name: "Louran Costa",
        domain: "lourancosta.com",
        phone: "213123123",
        city: "Vancouver",
        country: "Canada",
      },
    ];
  }
}
