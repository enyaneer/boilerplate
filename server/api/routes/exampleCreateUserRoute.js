const router = require('express').Router();
const exampleUser = require('../../db/models/exampleUser')



router.post('/', (req, res, next) => {
  exampleUser.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});


module.exports = router
