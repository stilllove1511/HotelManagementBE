import { Router } from 'express'
import { Request, Response } from 'express'
const router = Router();
/**
 * @openapi
 * /u/test:
 *   get:
 *     tags:
 *      - "[Admin]: admins"
 *     summary: Quản lý Hotel
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.use('/user', (req: Request, res: Response) => {


});


export default router;