import { Router } from 'express'
import AccountController from '../controllers/account'
const router = Router();

/**
 * @openapi
 * /session:
 *   post:
 *     tags:
 *      - "[LOGIN]: account"
 *     summary: Đăng nhập
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Thông tin user"
 *        schema:
 *          type: "object"
 *          properties:
 *            email:
 *              type: "string"
 *              description: "email"
 *            password:
 *              type: "string"
 *              description: "password"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.post('/', AccountController.loginAccount);
export default router;