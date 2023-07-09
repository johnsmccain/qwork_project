import { register, sayHello } from '../controllers';
// import UsersController from '../controllers/user';
// import AuthController from '../controllers/auth';
// import ArtController from '../controllers/art';

// import { isLoggedIn, refreshAccessToken } from '../utils/middlewares';

import express from 'express';
import AuthController from '../controllers/auth';
// import { postUpload } from '../controllers/upload';

const router = express.Router();

router.get('/', sayHello);

router.post('/auth', AuthController.createUserWithPassword);
// router.post('/auth', AuthController.createUser);
router.post('/login', AuthController.logInWithPassword);
// router.delete('/logout', isLoggedIn, AuthController.logOut);
// router.post('/refresh', refreshAccessToken);

// router.get('/arts',
// // isLoggedIn,
// ArtController.myArts);
// router.post('/art',
// // isLoggedIn,
// ArtController.postArt);
// router.delete('/arts/:id',
// // isLoggedIn,
// ArtController.deleteArt);
// router.put('/arts/:id/like', ArtController.like);
// router.put('/arts/:id/unlike', ArtController.unlike);
// router.post('/arts/:id/comment', ArtController.comment);
// router.get('/arts/:category', ArtController.getByCategory);

// router.get('/users/:id', UsersController.getUser);
// router.get('/users', UsersController.getAllUsers);
// router.get('/user/likes', UsersController.myLikes);

// router.patch('/users/:id/follow', UsersController.follow);
// router.patch('/users/:id/unfollow',  UsersController.unfollow);
// router.post('/upload',  postUpload.upload, postUpload.uploadFunction);

export default router;
