import { Partner } from "../../models/partner";
import { badRequests, created, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreatePartnerParams, ICreatePartnerRepository } from "./protocols";

export class CreatePartnerController implements IController {
  constructor(
    private readonly createPartnerRepository: ICreatePartnerRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreatePartnerParams>
  ): Promise<HttpResponse<Partner | string>> {
    try {
      const requiredFields = ["name", "domain", "phone", "city", "country"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreatePartnerParams]?.length) {
          return badRequests(`Field ${field} is required.`);
        }
      }

      if (!httpRequest.body) {
        return badRequests("Please inform a body.");
      }
      const partner = await this.createPartnerRepository.createPartner(
        httpRequest.body!
      );
      return created<Partner>(partner);
    } catch (error) {
      return serverError();
    }
  }
}
