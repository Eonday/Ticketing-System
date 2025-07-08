import db from '../database/db.js';



export const showChatWithUser = async (req, res) => {
  const chatId = req.params.chatId;

  // Fetch chat data from DB based on chatId (pseudo-code)
  const messages = await db.getMessagesForChat(chatId);
  const userName = await db.getChatUserName(chatId);

  res.render('chat', { messages, userName, chatId });
};