import { Partner } from "../../models/partner";
import { badRequests, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdatePartnerRepository, UpdatePartnerParams } from "./protocols";

export class UpdatePartnerController implements IController {
  constructor(
    private readonly updatePartnerRepository: IUpdatePartnerRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<UpdatePartnerParams>
  ): Promise<HttpResponse<Partner | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest.body;

      if (!body) {
        return badRequests("Missing body request.");
      }

      if (!id) {
        return badRequests("Missing partner id.");
      }

      const partner = await this.updatePartnerRepository.updatePartner(
        id,
        body
      );

      return ok<Partner>(partner);
    } catch (error) {
      return serverError();
    }
  }
}
