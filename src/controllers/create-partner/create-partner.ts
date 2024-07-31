import { Partner } from "../../models/partner";

export interface CreatePartnerParams {
  name: string;
  domain: string;
  phone: string;
  city: string;
  country: string;
}

export interface ICreatePartnerRepository {
  createPartner(params: CreatePartnerParams): Promise<Partner>;
}
