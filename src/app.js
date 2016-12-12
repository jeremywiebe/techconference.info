var koa = require('koa')
var route = require('koa-route')
var serve = require('koa-static')
var app = koa()

app.use(serve(__dirname + '/static'), {
    maxage: 60
})

app.listen(3000)
