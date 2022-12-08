import { Router } from 'express'
import UserRouting from "./user/index"
const router = Router();

router.use('/u', UserRouting);
export default router;