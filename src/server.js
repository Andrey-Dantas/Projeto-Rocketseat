const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "1811551151", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", 
        subject: "Química", 
        cost: "20",
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },
    {
        name: "Andrey Dantas", 
        avatar: "https://avatars1.githubusercontent.com/u/63676545?s=460&u=877934979382f4d8bacaf82bc3a637f86e3cc36b&v=4", 
        whatsapp: "1811551151", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", 
        subject: "Química", 
        cost: "30",
        weekday: [6], 
        time_from: [720], 
        time_to: [1220] 
    },
    {
        name: "Andre victor", 
        avatar: "https://avatars2.githubusercontent.com/u/56451511?s=460&u=a25670a73de1fbffa9c4e57bb1868c6f16da3cca&v=4", 
        whatsapp: "1811551151", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", 
        subject: "Química", 
        cost: "40",
        weekday: [5], 
        time_from: [720], 
        time_to: [1220] 
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClass(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-class.html", {subjects, weekdays})
}

const express = require ('express')
const server = express()
const nunjucks = require ('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-class", pageGiveClass)
.listen(5500)