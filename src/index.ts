import express from 'express'

const app = express()

const port = String(process.env.PORT)
if (!port) throw new Error('PORT undefined')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
