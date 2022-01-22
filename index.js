const express = require('express')
const app = express()
const port = 1111 // leave hard coded until env

app.get('/', (req, res) => {
  res.json({"hello": "world"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})