import {  getConnection } from "typeorm";
import { Photo } from "../../../entity/Photo";

export default async function (photo: Photo): Promise<Photo | undefined> {
  try {
    return await getConnection().transaction(async ({getRepository}) => {
      return getRepository(Photo).save(photo);
    });
  } catch (error) {
    console.error(error);
  }
}
