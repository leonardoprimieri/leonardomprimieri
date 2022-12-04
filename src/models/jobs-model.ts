import { TechModel } from "@/models/tech-model";

export type JobsModel = {
  id: number;
  name: string;
  description: string;
  image: string;
  techs: TechModel[];
  project: boolean;
};
