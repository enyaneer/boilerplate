const app = require('./server')
//can also require in db here



const PORT = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

app.listen(PORT, function () {
  console.log(`Hello, I'll be your server for the evening`)
  console.log(`Our selection includes some fine port ${PORT}`)
});
