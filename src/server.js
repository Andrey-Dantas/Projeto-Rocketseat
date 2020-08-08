const express = require ('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClass, saveClass} = require('./pages')

const nunjucks = require ('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-class", pageGiveClass)
.post("/save-class", saveClass)
.listen(5500)