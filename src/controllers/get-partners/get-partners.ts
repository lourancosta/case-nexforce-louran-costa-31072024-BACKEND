import { IController } from "../protocols";
import { IGetPartnersRepository } from "./protocols";

export class GetPartnersControler implements IController {
  constructor(private readonly getPartnersRepository: IGetPartnersRepository) {}

  async handle() {
    try {
      const partners = await this.getPartnersRepository.getPartners();

      return {
        statusCode: 200,
        body: partners,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
