import { Partner } from "../../models/partner";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreatePartnerParams,
  ICreatePartnerController,
  ICreatePartnerRepository,
} from "./protocols";

export class CreatePartnerController implements ICreatePartnerController {
  constructor(
    private readonly createPartnerRepository: ICreatePartnerRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreatePartnerParams>
  ): Promise<HttpResponse<Partner>> {
    try {
      const requiredFields = ["name", "domain", "phone", "city", "country"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreatePartnerParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} is required.`,
          };
        }
      }

      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please inform a body.",
        };
      }
      const partner = await this.createPartnerRepository.createPartner(
        httpRequest.body!
      );
      return {
        statusCode: 201,
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
