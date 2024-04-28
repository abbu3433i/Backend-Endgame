//1.-----------This will access data which is created in second js file

// var data = require("./script2");

// console.log(data);  //write in terminal node and tab its automatic takes file


/*
* 2.-----------This is art packag install from npm js from google----
*/
// var figlet = require("figlet");

// figlet("Abhishek", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



// {

// // 3.---------Routing:---  GET  POST naam ke rout pe work karengen

// // ----https://www.facebook.com "/profile/like/comment" -> this is called routing 
// // mtlb hum "/profile" laga ke profile page pe ja sakte hen or ese hi "/like" laga ke like bale page pe ja sakte hen

// //  GET route                   |                       POST route
// /*  1. Jo bhi data hum login    | 1. Jo bhi data hum login page pe likhen or bo
// *  page me likhege bo https url |    https url pe show na ho use hum 
// *  pe dikhega...                |    POST route kehte hen....
// *  is called get route          |
// */

// }


// 4.-------------Express js server banata he ------------
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/profile', function (req, res) {
//   res.send('Namastey duniya')  //---chrome pe /profile likhne pe is server pe request aayegi fir ye /profile page chala dega 
// })

// app.listen(3000)





// 5.---------------Middelware---------------

// middleware ek aisa function hai jo kisi bhi route se pahle
// chalta hai, jiska matlab aapka route chalne se pahle agar aap
// koi kaam karana chaahte ho to middleware ka upyog kiya jaa
// sakta he

// route pe chalne se pahle print karo chala on console
// iska matlab route chalne se pahle Jo chalega wo hai middleware

/*
            |
            |
            V                                                                                                */
// const express = require('express')
// const app = express()

// app.use(function(req , res ,next){
//     console.log("hello i am from middleware");  //----phele ye middleware chalega
//     next();  //---And next() push karega ki tum ab next fn. chala do bina next() ke iske next bala fn nhi chalega
// })

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/profile', function (req, res) {
//   res.send('Namastey duniya')
// })

// app.listen(3000)




//---------------------------------Route parameters--------------------------------------
//----To make any route dynamic you can use ":" at the place where you want to make it dynamic
//  and to access there value use req.params---
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/profile/:username', function (req, res)  //------is called route parameters
// {
//   res.send(`Namastey duniya ${req.params.username}`)
// })

// app.listen(3000)



//-----------------------Ejs me dynamically value add kar sakte hen------------------------
const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.use(express.static('./public')); //-------adding files by express.static

app.get('/', function (req, res) {
  res.render('index',{age:12}) //-----we can add dynamic value as well
})

app.get('/contact', function (req, res) {
  res.render("contact")
})

app.listen(3000)
