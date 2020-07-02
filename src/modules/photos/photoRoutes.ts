import { Router } from 'express';
import PhotoController from './PhotoController';
import checkToken from '../../middlewares/checkToken';


const photoRouter = Router();
const photoController = new PhotoController();


photoRouter.route('/user/:userId/photo').get(
  checkToken,
  photoController.getPhotosUser
);

// photoRouter.route('/user/photo/:photoId').get(

// );

photoRouter.route('/user/:userId/photo').post(
  photoController.addPhoto
);

// photoRouter.route('/user/photo/:photoId').delete(

// );


export default photoRouter;
