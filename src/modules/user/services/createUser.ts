import { User } from "../../../entity/User";
import { getManager } from "typeorm";

export default async (user: User): Promise<User | undefined> => {
  try {
    return await getManager().getRepository(User).save(user) || null;
  } catch (error) {
    console.error(error);
  }
}
