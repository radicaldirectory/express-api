/* FIRST SNIPPET:
This code fetches the Categories list from the endpoint exposed by
the Express.js server. */

let domCategoryList = document.getElementById("category-list");

async function fetchCategories() {
  //'categories' is the endpoint defined in index.js in the parent directory
  const cats_endpoint = 'categories';
  const cats_response = await fetch(cats_endpoint);
  const cats_json = await cats_response.json();

  //categories is an array
  const categories = cats_json.category_list.categories;

  for (const category of categories) {
    //console.log(category.name);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(category.id + ': ' + category.name));
    domCategoryList.appendChild(li);
  };

  //console.log(categories);
};

fetchCategories();

/* SECOND SNIPPET:
This code fetches the topic list from the Directory category, which is
another endpoint exposed by the Express.js server. */

let domDirectoryTopicList = document.getElementById("directory-topic-list");

async function fetchDirectory() {
  const dir_endpoint = 'directory-topics';
  const dir_response = await fetch(dir_endpoint);
  const dir_json = await dir_response.json();

  //topics is an array
  const topics = dir_json.topic_list.topics;

  for (const topic of topics) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(topic.id + ': ' + topic.title));
    domDirectoryTopicList.appendChild(li);
  };
};

fetchDirectory();
