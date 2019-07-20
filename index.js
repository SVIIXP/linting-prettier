const express = require('express')

const app = express()

app.get('*', (req, res) => {
  res.write('Hello wolrd')
  res.end()
})

app.listen(3000, () => {
  console.log('App listenint on port 3000')
})
