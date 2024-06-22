
const restaurant_list = ['Palace', 'kan ya makan', 'Origano'];

const ul = document.createElement('ul');

restaurant_list.forEach(lang => {
  const li = document.createElement('li');
  li.textContent = lang;
  ul.appendChild(li);
});

const myListContainer = document.getElementById('myList');
myListContainer.appendChild(ul);
