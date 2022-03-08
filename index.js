const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const foodItems = [
  {
    id: 1,
    name: 'Pizza',
    price: '$10.00',
    description: 'A delicious pizza',
    image: 'https://loremflickr.com/320/240/pizza',
  },
  {
    id: 2,
    name: 'Burger',
    price: '$5.00',
    description: 'A delicious burger',
    image: 'https://loremflickr.com/320/240/burger',
  },
  {
    id: 3,
    name: 'Cake',
    price: '$3.00',
    description: 'A delicious cake',
    image: 'https://loremflickr.com/320/240/cake',
  },
  {
    id: 4,
    name: 'Coffee',
    price: '$2.00',
    description: 'A delicious coffee',
    image: 'https://loremflickr.com/320/240/cofee',
  },
  {
    id: 5,
    name: 'Tea',
    price: '$1.00',
    description: 'A delicious tea',
    image: 'https://loremflickr.com/320/240/tea',
  }
]

app.get("/food/random", (req, res) => {
  const randomItem = foodItems[Math.floor(Math.random() * foodItems.length)];
  res.send(randomItem);
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})