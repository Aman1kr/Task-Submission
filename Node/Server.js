const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./config/routes/api/users'));
app.use('/api/auth', require('./config/routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
