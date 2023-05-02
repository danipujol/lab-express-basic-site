const express = require('express')
const app = express()
const port = 4500



app.use( express.static("public") )

app.get('/', (req, res) => {

 
  res.sendFile(__dirname + "/views/index.html") 
  //res.send('Hello Visitor!')

})


app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
   
})


app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
   // res.send("works")
})

app.get("/photo-gallery", (req, res) => {
    res.sendFile(__dirname + "/views/photo-gallery.html")
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})