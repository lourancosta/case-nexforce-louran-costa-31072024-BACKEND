import { IGetPartnersController, IGetPartnersRepository } from "./protocols";

export class GetPartnersControler implements IGetPartnersController {
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
