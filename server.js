const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const TELEGRAM_BOT_TOKEN = '7979958027:AAGfr95RX1UQAIsy823loYdrbsfpEFoNQb4';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
        <script>
          Telegram.WebApp.ready();
          const user = Telegram.WebApp.initDataUnsafe.user;
          if (user) {
            document.body.innerHTML = '<h1>Hello, ' + user.username + '</h1>';
          } else {
            document.body.innerHTML = '<h1>Unable to authenticate user.</h1>';
          }
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

