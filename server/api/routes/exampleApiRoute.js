const router = require('express').Router();

// matches GET requests to /api/example/
router.get('/', /*async*/ (req, res, next) => {
  /* etc */
  res.json('Hello from the back-end!')
});

// matches POST requests to /api/example/
router.post('/', /*async*/ (req, res, next) => {
  /* etc */
});

// matches PUT requests to /api/example/:exampleId
router.put('/:exampleId', /*async*/ (req, res, next) => {
 /* etc */
});

// matches DELETE requests to /api/example/:exampleId
router.delete('/:exampleId', /*async*/ (req, res, next) => {
 /* etc */
});

module.exports = router;
