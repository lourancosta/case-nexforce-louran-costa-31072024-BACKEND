import { Partner } from "../../models/partner";

export interface IDeletePartnerRepository {
  deletePartner(id: string): Promise<Partner>;
}
