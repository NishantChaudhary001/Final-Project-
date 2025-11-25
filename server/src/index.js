const express = require('express');
const cors = require('cors');
const app = express();
const suggestions = require('./routes/suggestions');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Smart Resume Builder - Backend running' }));

app.use('/api/v1/suggestions', suggestions);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
