import { Partner } from "../../models/partner";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdatePartnerRepository, UpdatePartnerParams } from "./protocols";

export class UpdatePartnerController implements IController {
  constructor(
    private readonly updatePartnerRepository: IUpdatePartnerRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<UpdatePartnerParams>
  ): Promise<HttpResponse<Partner>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest.body;

      if (!body) {
        return {
          statusCode: 400,
          body: "Missing body request.",
        };
      }

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
