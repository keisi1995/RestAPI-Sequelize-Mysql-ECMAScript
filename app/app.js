import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.set('sequelize', sequelize);

app.get('/', (req, res) => { res.send('This is Express API') });
app.use(routes);

export default app;
