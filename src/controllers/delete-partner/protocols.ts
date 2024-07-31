import { Partner } from "../../models/partner";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IDeletePartnerController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Partner>>;
}

export interface IDeletePartnerRepository {
  deletePartner(id: string): Promise<Partner>;
}
