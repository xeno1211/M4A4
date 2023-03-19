//** Code START
// 3) ROUTES
const express = require('express');
const morgan = require('morgan');

const loanRouter = require('./routes/loanRoute');
//const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/loan', loanRouter);
//app.use('/api/v1/users', userRouter);

module.exports = app;
//** code END