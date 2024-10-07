const express = require('express');
const _ = require('lodash');
const chalk = require('chalk');
const { fetchUsers } = require('./serverReq');
const app = express();
const port = 3000;

let users = [];

app.get('/users', (req, res) => {
  const userList = _.map(users, user => 
    `ID: ${user.id} - Nombre: ${user.nombre} - Apellido: ${user.apellido} - Timestamp: ${user.timestamp}`
  );

  console.log(chalk.blue.bgWhite(userList.join('\n')));

  res.json(users);
});

async function initializeUsers() {
  users = await fetchUsers();
  console.log('Users initialized');
}

initializeUsers().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});