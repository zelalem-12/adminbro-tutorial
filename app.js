const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World")
})
app.use("/admin", require("./admin"));

// starting the server 
const PORT  = 3000;
mongoose
  .connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true , useUnifiedTopology: true })
  .then(app.listen(PORT, () => {
    console.log(`🔥  Server started on PORT: ${PORT}`)
  }))
  .catch(err => console.log(err))