import express from 'express'
import userControllers from '../controllers/user.controller.js';

const router = express.Router();


const {getAllUser, updateUser, getUser} = userControllers;


router.put("/:userId", passport.authenticate('jwt', { session: false }),updateUser)
router.get("/:userId", getUser)
router.get("/", getAllUser)
export default router;