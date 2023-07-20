const express = require('express');

const mongoose = require('mongoose');


const app = express();
require('dotenv').config()
const port = process.env.PORT || 8080;



const postRouter = require('./routes/post-route');
const adminRouter = require('./routes/admin-route')

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'));



app.set('view engine', 'ejs');


app.use('/', postRouter);
app.use('/', adminRouter);



// render 404 page
app.all('*', (req, res) => {
  res.sendFile(__dirname +'/helper/404.html');
});


// connect to the mongodb
mongoose
  .connect('mongodb://localhost:27017/blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err));

// Listennig to the port  
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
