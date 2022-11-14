import express from 'express';
import namecheapRouter from './namecheapRouter.js'

const PORT = 5000;

const app = express();

app.use(express.json());
app.use('/api', namecheapRouter);

app.get('/', (req, res) => {
    res.status(200).json('Server is working!');
})

app.listen(PORT, () => console.log('SERVER STARTED'));