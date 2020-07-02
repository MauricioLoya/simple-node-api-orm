import { getManager } from "typeorm";
import { User } from "../../../entity/User";
import { Photo } from "../../../entity/Photo";

export default async (id: number | string): Promise<Photo[] | undefined> => {
  try {
    const user = await getManager().getRepository(User).findOne(id, { relations: ['photos'] });
    return user?.photos;
  } catch (error) {
    console.error(error);
  }
}
