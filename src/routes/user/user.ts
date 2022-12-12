import { Router } from 'express'
import UserController from '../../controllers/user/index'
import * as passport from 'passport'
const passportConfig = require('../../middlewares/passport')
const router = Router();
/**
 * @openapi
 * /u/user:
 *   get:
 *     tags:
 *      - "[USER]: user"
 *     summary: Thông tin user
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.get('/', passport.authenticate('jwt', { session: false }), UserController.getUsers);
/**
 * @openapi
 * /u/user/{userId}:
 *   get:
 *     tags:
 *      - "[USER]: user"
 *     summary: Thông tin user
 *     parameters:
 *      - in: "path"
 *        name: "userId"
 *        type: "string"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.get('/:userId', passport.authenticate('jwt', { session: false }), UserController.getSingleUser);



/**
 * @openapi
 * /u/user/create:
 *   post:
 *     tags:
 *      - "[USER]: user"
 *     summary: Thông tin user
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Thông tin user"
 *        schema:
 *          type: "object"
 *          properties:
 *            fullName:
 *              type: "string"
 *              description: "Tên người dùng"
 *            email:
 *              type: "string"
 *              description: "Email người dùng"
 *            password:
 *              type: "string"
 *              description: "duong dan anh"
 *            phone:
 *              type: "string"
 *              description: "Số điện thoại người dùng"
 *            address:
 *              type: "string"
 *              description: "Địa chỉ người dùng"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.post('/create', UserController.createUser);


/**
 * @openapi
 * /u/user/{userId}:
 *   patch:
 *     tags:
 *      - "[USER]: user"
 *     summary: Thông tin user
 *     parameters:
 *      - in: "path"
 *        name: "userId"
 *        type: "string"
 *      - in: "body"
 *        name: "body"
 *        description: "Thông tin user"
 *        schema:
 *          type: "object"
 *          properties:
 *            fullName:
 *              type: "string"
 *              description: "Tên người dùng"
 *            email:
 *              type: "string"
 *              description: "Email người dùng"
 *            password:
 *              type: "string"
 *              description: "duong dan anh"
 *            phone:
 *              type: "string"
 *              description: "Số điện thoại người dùng"
 *            address:
 *              type: "string"
 *              description: "Địa chỉ người dùng"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.patch('/:userId', passport.authenticate('jwt', { session: false }), UserController.editUser);

/**
 * @openapi
 * /u/user/{userId}:
 *   delete:
 *     tags:
 *      - "[USER]: user"
 *     summary: Thông tin user
 *     parameters:
 *      - in: "path"
 *        name: "userId"
 *        type: "string"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.delete('/:userId', passport.authenticate('jwt', { session: false }), UserController.removeUser);
export default router;