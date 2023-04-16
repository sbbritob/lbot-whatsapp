const { create, Client } = require('wa-automate-nodejs');

create().then(client => start(client));

async function start(client) {
  // seu código aqui
}

client.onMessage(async message => {
    if (message.body === 'Olá') {
      await client.sendText(message.from, 'Olá, eu sou um bot!');
    }
  });