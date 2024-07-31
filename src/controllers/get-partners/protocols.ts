import { Partner } from "../../models/partner";

export interface IGetPartnersRepository {
  getPartners(): Promise<Partner[]>;
}
