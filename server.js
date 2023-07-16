const express = require('express')
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config();
const db = require('./db')
const logger = require('morgan')
const AppRouter = require('./routers/AppRouter')
const PORT = process.env.PORT || 3001
const {Users} = require('./models')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(sessions({
//     name: 'session-name',
//     secret: process.env.SESSION,
//     cookie: { 
//         maxAge: 60 * 60 * 1000,
//     },
//     saveUninitialized: true,
//     resave: false
// }));
// app.use(express.static(__dirname));
// console.log(process.env.SESSION)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

app.get('/', (req, res) => {
    res.status(200).json({message: 'This is NP root path'})
})

let session
// app.post('/', async(req,res) => {
//     try{
//         console.log('working',session)
//         console.log('request body',req.body)
//         const user = await Users.find({email: req.body.email})
//         console.log('find user',user,user[0].password)

//         if(user && user[0].password === req.body.password){
//             session=req.session;
//             console.log(req.session.userid)
//             session.userid=req.body.email;
//             req.setHeader("Set-Cookie", [`study=${userId}`]);
//             console.log('requestsession and session',req.session)
//             res.redirect('http://127.0.0.1:5500/gotrip/index.html');
//         }
//         else{
//             console.log('not login')
//             res.send('gotrip/register.html');
//         }
//     } catch(e){
//         res.status(500).json(e.message)
//     }
// })

// app.get('/',(req,res) => {
//     console.log(req.cookies,req.session)
//     if(req.session.isVisit) {
//         req.session.isVisit++;
//         res.send('<p>' + req.session.isVisit + ' visit</p>' + '<a href="gotrip/index.html">go to page</a>');
//         console.log(req.session)
//       } else {
//         req.session.isVisit = 1;
//         res.send("first visit");
//         console.log(req.session);
//       }
// });

app.use('/api', AppRouter)