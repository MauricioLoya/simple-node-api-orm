import { getUsersDoc, postUsersDoc } from "../modules/user/docs/user.docs";

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'your description here',
    termsOfService: '',
    contact: {
      name: 'Tran Son hoang',
      email: 'son.hoang01@gmail.com',
      url: 'https://hoangtran.co'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  tags: [
    { name: 'User', },
    { name: 'photo', }
  ],
  paths: {
    '/user': {
      'get': getUsersDoc,
      'post': postUsersDoc,
    },
    '/photo': {
      'get': getUsersDoc,
      'post': postUsersDoc,
    }
  }
}
