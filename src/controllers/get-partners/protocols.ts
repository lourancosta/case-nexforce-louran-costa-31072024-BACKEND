import { Partner } from "../../model/partner";
import { HttpResponse } from "../protocols";

export interface IGetPartnersController {
  handle(): Promise<HttpResponse<Partner[]>>;
}

export interface IGetPartnersRepository {
  getPartners(): Promise<Partner[]>;
}
