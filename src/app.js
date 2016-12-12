var koa = require('koa')
var route = require('koa-route')
var serve = require('koa-static')
var app = koa()

app.use(serve(__dirname + '/static'), {
    maxage: 60
})


const port = Number.parseInt(process.env.PORT, 10) || 3000
app.listen(port, () => {
    console.log('Listening on port', port)
})
