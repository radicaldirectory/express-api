console.log('Server starts!!');

//dependencies
const express = require('express');
const fetch = require('node-fetch');

//setup HTTP server. if nodemon is installed, run 'nodemon index.js' for live refresh
const app = express();
const port = 3000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

//Expose static files in 'public' to client
app.use(express.static('public'));

//Fetch categories list from Radical Directory and expose to client as endpoint
app.get('/categories', async (req, res) => {
  const api_url = "https://radical.directory/categories.json";
  const fetch_response = await fetch(api_url);
  const fetch_data = await fetch_response.json();
  res.json(fetch_data);
});

//Fetch directory topic list and expose to client as endpoint
app.get('/directory-topics', async (req, res) => {
  const api_url = "https://radical.directory/c/6.json";
  const fetch_response = await fetch(api_url);
  const fetch_data = await fetch_response.json();
  res.json(fetch_data);
});
