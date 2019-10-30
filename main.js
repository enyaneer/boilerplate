const app = require('./server')
const {db} = require('./server/db')
//can also require in db here



const PORT = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

db.sync()
.then(() => {
    console.log("Are you syncing what I'm syncing? Your db")
    app.listen(PORT, () =>
      console.log(`Hello, I'll be your server for the evening.
      From our selection I recommend listening in on some fine port ${PORT}`))
  })



