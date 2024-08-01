import { Partner } from "../models/partner";

export type MongoPartner = Omit<Partner, "id">;
