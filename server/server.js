// for backend 
const express = require('express');
const cors = require('cors');

const app = express();

// middleware : 
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// /api/posts => 1 endpoint symulacja zwracania listy postow z bazy danych 
app.get('/api/posts', (req, res) => {
    const data = [
      { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    ]
    res.json(data);
  });


  app.get('/api/SinglePosts/test', (req, res) => {
    const data = [
      { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    ]
    res.json(data);
  });

  app.get('/api/NewPost/new', (req, res) => {
    const data = [
      { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    ]
    res.json(data);
  });

// nasluchiwanie : 
  app.listen(8000, function(){
    console.log('Server is running on port:', 8000);
  });