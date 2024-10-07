const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

async function fetchUsers() {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    return response.data.results.map(user => ({
      nombre: user.name.first,
      apellido: user.name.last,
      id: uuidv4(),
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

module.exports = { fetchUsers };