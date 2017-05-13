'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAaAHOB9OxEBAMsL8bfeBUSKbexqsJiOFMv70gGy41QjF0ccLFaL9ow2WZBWgwFBeIriUROh97VcrOCki1sFzCu3qnOfHA2ZB8oDHIB9WDdAbZBznH1fxBCxbiOMKha2Orpj7s2LH5ZAB69Vu7nAMc4OVuqIKRBxb9xnzgfZCFwZDZD',
  verify: 'AMBER',
  app_secret: '2475730742b284be7bcbea4ce5d22d44'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
	console.log(payload)
  let text = payload.message.text
  
  console.log(payload.sender.id)

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(6666)
console.log('Echo bot server running at port 6666.')