import { Partner } from "../../models/partner";

export interface UpdatePartnerParams {
  name?: string;
  domain?: string;
  phone?: string;
  city?: string;
  country?: string;
}

export interface IUpdatePartnerRepository {
  updatePartner(id: string, params: UpdatePartnerParams): Promise<Partner>;
}
