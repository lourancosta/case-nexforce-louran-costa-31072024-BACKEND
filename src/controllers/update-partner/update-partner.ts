import { Partner } from "../../models/partner";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  IUpdatePartnerController,
  IUpdatePartnerRepository,
} from "./protocols";

export class UpdatePartnerController implements IUpdatePartnerController {
  constructor(
    private readonly updatePartnerRepository: IUpdatePartnerRepository
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Partner>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing partner id",
        };
      }

      const partner = await this.updatePartnerRepository.updatePartner(
        id,
        body
      );

      return {
        statusCode: 200,
        body: partner,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong,",
      };
    }
  }
}
