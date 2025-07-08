import express from 'express';
import { showChatWithUser } from '../controllers/chatController.js';

const router = express.Router();

// Dynamic route to show chat with specific user or chat session by ID
router.get('/:chatId', showChatWithUser);

export default router;