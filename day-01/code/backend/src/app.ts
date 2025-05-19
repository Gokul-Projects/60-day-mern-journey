import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import morgan from 'morgan';
import {config} from 'dotenv';
import router from '@route/v1';

// initialize dotenv
config()

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet())
app.use(morgan('dev'));

// main router
app.use('/api/v1',router);

export default app