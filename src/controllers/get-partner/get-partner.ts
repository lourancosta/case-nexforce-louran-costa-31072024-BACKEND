import { Partner } from "../../models/partner";
import { badRequests, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IGetPartnerByIdRepository } from "./protocols";

export class GetPartnerByIdController implements IController {
  constructor(
    private readonly getPartnerByIdRepository: IGetPartnerByIdRepository
  ) {}

  async handle(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Partner | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequests("Missing partner id");
      }

      const partner = await this.getPartnerByIdRepository.getPartner(id);
      return ok<Partner | string>(partner);
    } catch (error) {
      return serverError();
    }
  }
}
