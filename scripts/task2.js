
const Name = 'Elizabeth Kowalski Davis';
document.querySelector('#name').textContent = Name;
const year = 2021;
document.querySelector('#year').textContent = year;
const pic = 'ME.jpg';
document.querySelector('img').setAttribute('src', pic);

const favFoods = ['Hamburger', ' Mac & Cheese', ' Fish', ' & Shrimp'];
document.querySelector('#food').textContent = favFoods;
const anothFavFood = 'Cottage Cheese';
favoriteFoods.push(anothFavFood); 
document.querySelector('#food').textContent = favFoods;
favFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods;

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods;



