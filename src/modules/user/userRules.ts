import { check } from "express-validator";

export default {
  postUser: [
    check('user.username', 'El usuario no es valido, o no se esta mandando.')
      .isEmail(),
    check('user.password', 'la contraseña no cumple con lo establecido')
      .isLength({ min: 6, max: 18 })
  ]
}
