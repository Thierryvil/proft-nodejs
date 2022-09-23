import express from 'express';
import { router } from './sales/routes/index.js';

const app = express();
app.use(express.json());

app.use('/sales', router)

export { app };