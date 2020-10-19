console.log('Server starts!!');

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

app.use(express.static('public'));
//app.use(express.json({ limit: '1mb' }));

app.get('/test', async (req, res) => {
  //res.send('Hello World!')
  const api_url = "https://radical.directory/categories.json";
  //const api_url = "https://api.wheretheiss.at/v1/satellites";
  const fetch_response = await fetch(api_url);
  const fetch_data = await fetch_response.json();
  //res.send(fetch_response);
  res.json(fetch_data);
});
