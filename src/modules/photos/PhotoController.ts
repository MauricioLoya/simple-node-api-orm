import { Request, Response } from "express";
import createPhoto from "./services/createPhoto";
import { Photo } from "../../entity/Photo";
import { User } from "../../entity/User";
import getPhotosByUser from "./services/getPhotosByUser";

export default class UserController {
  addPhoto = async (req: Request, res: Response): Promise<void> => {
    const photo = req.body.photo as Photo;
    const userId = Number(req.params.userId);

    photo.user = { id: userId } as User;

    const result = await createPhoto(photo);
    res.json({ result, data: true });
  }

  getPhotosUser = async (req: Request, res: Response) => {
    const photos = await getPhotosByUser(req.params.userId);
    res.json({
      photos,
      error: false
    });
  };

}
