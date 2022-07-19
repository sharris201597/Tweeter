const express = require('express');
const app = express()
const port = 3000;
const path = require('path')

app.set('view engine', 'ejs')

app.listen(port, ()=> {
    console.log(`Hello World app listening at port: ${port}`)
})

const user = {
    name: 'Samuel Harris'
}



// routes
app.get('/', (req, res) => {
    res.render('pages/home',{user: user})
  })

app.get('/login', (req, res) => {
    res.render('pages/login')
})

app.get('/profile', (req, res)=> {
    res.render('pages/profile')
})

app.get('/register', (req, res) => {
    res.render('pages/register')
})

app.get('/user', (req,res) => {
    res.render('pages/user', {user: user})
})

app.use(express.static(path.join(__dirname, 'public')))