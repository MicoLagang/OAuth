const express = require('express');
const app = express();

// set up view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res)=>{
    const anydata = {
        description: {
            title: "This is a title",
            item: 5
        }
    }
    res.render('home', anydata );
});

// listen to requests
app.listen(3000, ()=> {
    console.log('app now listening for requests on port 3000');
});