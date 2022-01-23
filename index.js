require("dotenv").config()

const express = require('express');
const res = require("express/lib/response");
const phin = require('phin');
const app = express();
const webhookurl = `https://discord.com/api/webhooks/${process.env.WEBHOOK_ID}/${process.env.WEBHOOK_TOKEN}`
const port = 1111 // leave hard coded until env

app.get('/', (req, res) => {
  res.json({"hello": "world"})

})

app.post('/dblhook', async (req, res) => {
  if (req.headers.authorization !== process.env.API_PASS) return res.json({"message": "invalid api key"})
  console.log(req.body)
  let content = `<@${req.body.user} voted for <@${req.body.bot}`
  if (req.body.type === "test") content = "TESTING ONLY"

  await phin({
    url: webhookurl,
    method: "POST",
    data: {
      content: content
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
