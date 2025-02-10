// server.js
import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors()); 
app.use(bodyParser.json());

app.post('/api/send-message', async (req, res) => {
  const { name, contact, message } = req.body;
  
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  const text = `Имя: ${name}\nКонтакт: ${contact}\nСообщение: ${message}`;
  
  try {
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: text,
    });
    res.status(200).send('Message sent');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending message');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
