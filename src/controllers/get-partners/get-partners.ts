import { Partner } from "../../models/partner";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetPartnersRepository } from "./protocols";

export class GetPartnersControler implements IController {
  constructor(private readonly getPartnersRepository: IGetPartnersRepository) {}

  async handle(): Promise<HttpResponse<Partner[] | string>> {
    try {
      const partners = await this.getPartnersRepository.getPartners();
      return ok<Partner[]>(partners);
    } catch (error) {
      return serverError();
    }
  }
}
