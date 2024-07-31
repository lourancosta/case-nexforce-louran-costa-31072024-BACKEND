import { Partner } from "../../models/partner";
import { badRequests, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeletePartnerRepository } from "./protocols";

export class DeletePartnerController implements IController {
  constructor(
    private readonly deletePartnerRepository: IDeletePartnerRepository
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

      const partner = await this.deletePartnerRepository.deletePartner(id);
      return ok<Partner>(partner);
    } catch (error) {
      return serverError();
    }
  }
}
