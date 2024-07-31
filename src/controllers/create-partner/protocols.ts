import { Partner } from "../../models/partner";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreatePartnerController {
  handle(
    httpRequest: HttpRequest<CreatePartnerParams>
  ): Promise<HttpResponse<Partner>>;
}

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
