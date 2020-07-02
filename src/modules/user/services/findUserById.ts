import {getManager} from "typeorm";
import {User} from "../../../entity/User";

export default async (id: number | string): Promise<User | undefined> => {
  try {
    return await getManager().getRepository(User)
      .findOne(id);
    // You can write a usual query, but
    // const QUERY = 'SELECT username, password FROM user WHERE id = ?'
    // const results = await getManager().query(QUERY, [id]);
    // return results[0];
  } catch (error) {
    console.error(error);
  }
}
