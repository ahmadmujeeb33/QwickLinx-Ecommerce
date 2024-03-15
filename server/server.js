const express = require('express');
const app = express();
const db = require('./config');
const cors = require('cors');
const routes = require('./controllers');


const PORT = process.env.PORT || 3001;



app.use(cors());
app.use(express.json()); 

app.use('/api', routes);


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
});

