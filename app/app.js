import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();
app.use(morgan("dev"));
app.use(express.json());
// app.set('sequelize', sequelize);

app.get("/", (req, res) => { res.send("This is Express API") });
app.use(routes);

export default app;
