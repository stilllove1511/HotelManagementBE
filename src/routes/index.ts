import { Router } from 'express'
import UserRouting from "./user"
import AdminRouting from './admin'
import AccountRouting from './account'
import * as passport from 'passport'
const router = Router();

router.use('/u', UserRouting);
router.use('/a', passport.authenticate('jwt', { session: false }), AdminRouting);
router.use('/session', AccountRouting)
export default router;