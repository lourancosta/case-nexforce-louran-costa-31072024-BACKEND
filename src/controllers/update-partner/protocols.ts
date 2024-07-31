import { Partner } from "../../models/partner";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UpdatePartnerParams {
  name?: string;
  domain?: string;
  phone?: string;
  city?: string;
  country?: string;
}

export interface IUpdatePartnerController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Partner>>;
}

export interface IUpdatePartnerRepository {
  updatePartner(id: string, params: UpdatePartnerParams): Promise<Partner>;
}
