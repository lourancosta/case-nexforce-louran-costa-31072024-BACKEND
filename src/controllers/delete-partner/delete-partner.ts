import { Partner } from "../../models/partner";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  IDeletePartnerController,
  IDeletePartnerRepository,
} from "./protocols";

export class DeletePartnerController implements IDeletePartnerController {
  constructor(
    private readonly deletePartnerRepository: IDeletePartnerRepository
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Partner>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing partner id",
        };
      }

      const partner = await this.deletePartnerRepository.deletePartner(id);
      return {
        statusCode: 200,
        body: partner,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
