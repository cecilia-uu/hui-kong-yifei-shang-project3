import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { register, login, logout, test} from '../controllers/authController.js'

const router = express.Router();


router.get('/', test);

// API: register
router.post("/register", register);

// API: login
router.post("/login", login);


// API: logout
router.post("/logout", logout);

export default router;