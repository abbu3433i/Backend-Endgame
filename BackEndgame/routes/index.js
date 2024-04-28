var express = require('express');
var router = express.Router();

const userModel = require("./users");
const passport = require('passport'); //----

const localStrategy = require("passport-local")               //------------------------------------------------------------------
                                                              //  in dono lino ki bajah se banda login kar payega mtlb strategy ya heart use kar payega
passport.use(new localStrategy(userModel.authenticate()));    //--------------------------------------------------------------------------------------



router.get('/', function(req, res, next) {
    res.render('index');
  });

router.get('/profile', isLoggedIn ,function(req, res, next) {
    res.render("loginn")
  });

router.get('/success', isLoggedIn ,function(req, res, next) {
    res.render("profile")
  });


//--------------------------Register accont creation---------------------------------------------------------

  router.post('/register',function(req , res){
    var userdata = new userModel({
      username : req.body.username,
      secret : req.body.secret
    });

    userModel.register(userdata, req.body.password)   // itne code ki wajah se user ka account ban rha
    .then(function(registereduser) {                  //
      passport.authenticate("local")(req ,res , function(){
        res.redirect("/profile");
      })
    })

  });


  //-------------------------------Login-------------------------------------------

  router.post("/login", passport.authenticate("local",{
    successRedirect : "/success",
    failureRedirect : "/"

  }), function(req , res){})

  router.get("/logout",function(req, res, next){
    req.logOut(function(err){
      if(err) return next(err)
      res.redirect("/")
    })
  })

  //---------------------------------------------------------------------------

  //--Agar aap loggedin ho to aage badho nhi to bapas jao / route pe
  function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    //else
    res.redirect("/")
  }
 


//--------------------------------------------------------------------------------------------------

//*************flash************ */
// //----flash ek data banayega jo dusre route me use hoga isiliye hum falsh use karte hen---- 

// router.get('/flash', function(req, res, next) {
//   req.flash("age",25);
//   req.flash("name","abhishek");   //---Bina flash ke hum ek route ka data dusre route me nhi bhej ya access kar sakte
//   res.send("bangaya");
// });

// router.get('/checkkarlo', function(req, res, next) {
//  console.log(req.flash("age"),req.flash("name"));
//   res.send("check kar lo terminal me");
// });


//-----------------------------------------------------------------------------------------


// const userModel = require("./users");

// router.get('/', function(req, res, next) {
//   res.render('index');
// });

//------------Data creation-------
// router.get("/data", async function(req , res){
//   const userdata = await userModel.create({
//   username : "abhishek",
//   nickname : "abbubhai",
//   description : "i a fullstacker",
//   catagories: ["react" , "nextjs"],
//   });

//   res.send(userdata);
// });



//1.How can I perform a case-insensitive search in Mongoose?

/*    ^ - shuruaat esi ho
*
*     $ - ant esa ho
*/
// router.get("/find",async function(req , res){
//   // new RegExp(search,flags)
//   var regex = new RegExp("^ABHI$" , "i"); //------case insensitive kar dega kesa bhi likho abhi ka data aa gayega
//   const user = await userModel.find({username:regex})
//   res.send(user);
// });




// 2.How do I find documents where an array field contains all of a set of values?

// router.get('/find', async function(req, res, next) {
//   const user = await userModel.find({catagories: { $all : ["fashion"]} })
//   res.send(user);
// });



// 3. Date ke base pe data find karn 

// router.get('/find', async function(req, res, next) {
//   var date1 = new Date('2024-03-31');   //---$gte = greater than equal to
//   var date2 = new Date('2024-04-1');    //---$lte = less than equal to
//   const user = await userModel.find({datecreated:{$gte: date1 , $lte: date2}});
//   res.send(user);
// });



// 4.Agar catagorie data me exist karegi to hi data milega nhi to nhi milega

// router.get('/find', async function(req, res, next) {
//   const user = await userModel.find({catagories: {$exists:true} })
//   res.send(user);
// });



//5.Range ke base pe data ko find karna 

// router.get('/find', async function(req, res, next) {
//   const user = await userModel.find({
//     $expr:{
//       $and:[
//         {$gte:[{$strLenCP:'$nickname'}, 0]},  //---nickname ki 0 length se 12 len tak ka data milega
//         {$lte:[{$strLenCP:'$nickname'},12]}
//       ]
//     }
//   });
//   res.send(user);
// });








module.exports = router;
