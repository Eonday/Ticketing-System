import express from 'express';
import { showSignupForm, handleSignup } from '../controllers/signupController.js';

const router = express.Router();


router.get('/', showSignupForm); 
router.get('/signup', showSignupForm);   // renders signup page
router.post('/submit', handleSignup);    // handles form post

export default router;