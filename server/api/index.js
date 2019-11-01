const router = require('express').Router();
const passport = require('passport')
const strategy = require('./routes/oauth')

//require apiRoute files here
const apiRouteName = require('./routes/exampleApiRoute')
const loginApiRouteName = require('./routes/exampleLoginRoute')
const createUserRouteName = require('./routes/exampleCreateUserRoute')
const logoutUserRoutename = require('./routes/exampleLogoutRoute')


//seperate api routes (in routes folder) go here
router.use('/example', apiRouteName)
router.use('/login', loginApiRouteName)
router.use('/signup', createUserRouteName)
router.use('/logout', logoutUserRoutename)

router.get('/me', (req, res, next) => {
  res.json(req.user);
}); //might have to be placed somewhere else

//google Oauth
router.get('/auth/google', passport.authenticate('google', {
  scope: 'email'
}))

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

passport.use(strategy)

//404 error
router.use((req, res, next) => {
  const err = new Error('Not found. Do better');
  err.status = 404;
  next(err);
});

module.exports = router;
