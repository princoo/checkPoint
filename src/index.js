import express from 'express';
// import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';
// import session from 'express-session';
import dotenv from 'dotenv';
import fileRouter from './routes';
import ErrorHandler from './middlewares/errorHandler.middleware';
// eslint-disable-next-line no-unused-vars
import sequelize from './database/config/db';

const app = express();
dotenv.config();
const { PORT } = process.env;

// app.use(
//   session({
//     secret: process.env.JWT_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   }),
// );

// app.use(bodyParser.urlencoded({ extended: false }));

// passport initialize
// app.use(passport.initialize());
// app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use('/', fileRouter);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log('server running ojn', PORT);
});
