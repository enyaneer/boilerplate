const router = require('express').Router();

router.delete('/', (req, res, next) => {
  req.logout();
  req.session.destroy()
  res.status(200).send('You have been logged out');
});

module.exports = router
