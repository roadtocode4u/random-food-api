const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

const northIndianFood = ['Chole Bhature', 'Biryani', 'Poha', 'Paratha', 'Dal Tadka']
const southIndianFood = ['Dosa', 'Idli', 'Uttapam', 'Vada', 'Russam', 'Pongal']

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/food/north', (req, res)=>{
  const index = Math.floor(Math.random() * northIndianFood.length);
  res.send({
    food: northIndianFood[index],
    price: Math.floor(Math.random() * 100),
    category: 'north'
  });
})

app.get('/food/south', (req, res)=>{
  const index = Math.floor(Math.random() * southIndianFood.length);
  res.send({
    food: southIndianFood[index],
    price: Math.floor(Math.random() * 100),
    category: 'south'
  });
})

app.get('/food/mix', (req, res)=>{
  const combinedFood = northIndianFood.concat(southIndianFood);
  const index = Math.floor(Math.random() * combinedFood.length);
  res.send({
    food: combinedFood[index],
    price: Math.floor(Math.random() * 100),
    category: 'mix'
  });
})


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})