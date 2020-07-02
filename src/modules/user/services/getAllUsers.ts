import { getManager } from "typeorm";
import { User } from "../../../entity/User";

export default async (): Promise<User[] | undefined > => {
  try {
    // return await getManager().getRepository(User)
    //   .find({ status: true });
    return await getManager().query(`SELECT * from users where status = 1`);
  } catch (error) {
    console.error(error);
  }
}
