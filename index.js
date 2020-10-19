console.log('Server starts!!');

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

app.use(express.static('public'));
//app.use(express.json({ limit: '1mb' })); //not sure what this does

app.get('/categories', async (req, res) => {
  const api_url = "https://radical.directory/categories.json";
  const fetch_response = await fetch(api_url);
  const fetch_data = await fetch_response.json();
  res.json(fetch_data);
});

app.get('/directory-topics', async (req, res) => {
  const api_url = "https://radical.directory/c/6.json";
  const fetch_response = await fetch(api_url);
  const fetch_data = await fetch_response.json();
  res.json(fetch_data);
});
