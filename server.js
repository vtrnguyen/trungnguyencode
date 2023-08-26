const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Node JS with Trung Nguyen')
})

app.get('/about', (req, res) => {
  res.send('Orgin dev')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})