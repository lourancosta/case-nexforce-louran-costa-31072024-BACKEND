import { Partner } from "../../models/partner";

export interface IGetPartnerByIdRepository {
  getPartner(id: string): Promise<Partner>;
}
