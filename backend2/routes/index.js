var express = require('express');
var router = express.Router();

/****route naam isliye hua he kyuki app.js naam ki file me app name ka variable already banaya ja chuka he****/

// router.get('/views', function(req, res, next) {
//   res.render('index', { title: 'Express' });  //----render views se koi file utahyega
// });





// const userModel = require("./users");

// router.get("/",function(req,res){
//   res.send("hello bahiyon")
// })

/*****Ab hum padenge---> creation,reading,updation and delete ******/

// router.get("/create" , async function(req , res){
//   const createuser =  await userModel.create({
//     user : "abbu3433i",
//     age : 20,                          //--------------user creation
//     name : "abhishek"
//   });
//   res.send(createuser);
// })

// //-----------------ye sare user ko show ya find karke deta he--------------
// router.get("/alluser", async function(req , res){
//   const alluser = await userModel.find(); 

//   res.send(alluser);
// })

// //----------------ye only one user ko show ya find karega jiska naam abbu ho-------------...
// router.get("/oneuser", async function(req , res){
//   const oneuser = await userModel.findOne({user : "abbu3433i"}); 

//   res.send(oneuser);
// })

// //-----------------this will find one user and delete that user-----------------...
// router.get("/delete", async function(req , res){
//   const deleteduser = await userModel.findOneAndDelete({
//     name : "abhishek"
//   })
//   res.send(deleteduser);
// })



/*******Session******* */

// //------------------------session create ese karte he--------------------------------------
// router.get("/",function(req , res){
//   req.session.ban = true           
//   res.send("hello bahiyon")
// })

// //-----------------------------session check ese karte he-------------------------------------------
// router.get("/checkban",function(req , res){
//   if(req.session.ban === true){
//     console.log(req.session);
//     res.send("check kiya he console dekho ||    you are banned");
//   }
//   else{
//     res.send("not banned")
//   }
// })

// //-----------------------agar session ko delete karna he to----------------------------
// router.get("/removesession",function(req , res){
//   req.session.destroy(function(err){
//     if(err) throw err;
//     res.send("session deleted or destroyed || ban removed")
//   })
// })



/******cookies****** */
//-----------------cookie create kari he-------------------------
router.get("/",function(req , res){
  res.cookie("age",25);
  res.send("hello bhai mere")
})

//-----------------cookie reading karne ke liye "cookie-s" | s | lagana yaad se likhna hoga-------------------
router.get("/cookie",function(req , res){
  console.log(req.cookies);
  res.send("check kar le bhai console me")
})

//------------------Delete cookie----------------------------------
router.get("/clear",function(req , res){
  res.clearCookie("age");
  res.send("cookie clear ho gai")
})

module.exports = router;
