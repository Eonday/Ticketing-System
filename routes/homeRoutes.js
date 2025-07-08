// routes/homeRoutes.js
import express from 'express';
import { showForm, handleForm } from '../controllers/homeController.js';



const router = express.Router();

router.get('/signup', showForm);    // GET /signup - show form
router.post('/home', handleForm);   // POST /home - process form & show home page


export default router;