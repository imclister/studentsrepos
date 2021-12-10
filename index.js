const expres = require('express')
const app = expres()
const studentData = require('./students.json')



const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send("Student Profiles")
})

app.get('/students' , (req,res) => {
    res.send(studentData)
})

app.listen(port, () => {
    console.log('App is listening  ${port}')
})