const router = require('express').Router();

//require apiRoute files here
const apiRouteName = require('./routes/exampleApiRoute')


//seperate api routes (in routes folder) go here
router.use('/example', apiRouteName)



//404 error
router.use((req, res, next) => {
  const err = new Error('Not found. Do better');
  err.status = 404;
  next(err);
});

module.exports = router;
