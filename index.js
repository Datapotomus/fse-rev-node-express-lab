const express = require('express');

const app = express();
const port = 3000;

//Allows a post for express.
app.use(express.json());

//Putting where we had old code.
//Importing and attaching default router to the app.
const defaultRouter = require('./routes/default.routes');
app.use('/', defaultRouter);

const userRouter = require('./routes/user.routes');
app.use('/api', userRouter)

app.listen(port,() => {
  console.log(`Example app is listening on ${port}`)
})