const express = require('express');
const router = require('./Routes/routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/',router);

app.listen(5000,()=>console.log("Server is running on port 5000"));