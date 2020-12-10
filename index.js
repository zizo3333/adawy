//express
const express=require('express');
const app =express();

const bodyParser=require("body-parser");
app.use(bodyParser.json());

//port connection
const port=process.env.PORT || 2000 ;
app.listen(port,()=>{
console.log(`listening on port ${port}`);
});


//db connect
const mongoose =require('mongoose');
const connectionParams={
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true 
}
const URL = "mongodb+srv://zizo33:19989898@cluster0.hfmnd.mongodb.net/Stalin?retryWrites=true&w=majority";
mongoose.connect(URL,connectionParams).then(()=>{
   console.log("Db connection succesfull");
}).catch(()=>{
   console.log("DB connection failed");
});


//middleware
const router=require('./routes/login');

app.use('/login',router);


const router2=require('./routes/Users');

app.use('/Users',router2);
//check
app.get('/',(req,res)=>{
   res.send("We are online");
   });


/*
const logging = (req,res,next)=>{

const router=require('./routes/api/members')
app.use('/api/members',router);

app.use(express.urlencoded());


}
 
subshecma

app.use(logging);*/





/*
app.get('/members',(req,res)=>{
res.json(members);
});


app.get('/members/:id',(req,res)=>{
const member=members.find(c=>members.id === parseInt(req.params.id))
if(!member){
res.status(404).send("id wasn't found");
}else {
res.send(member);
}
});

app.post('/members/add',(req,res)=>{
   const member={
      "id":members.length+1,
      name:req.body.name
   };
   members.push(member);
   res.send(member);
})   
*/



//package 
//scripts
// "test": "echo \"Error: no test specified\" && exit 1",
  //  "dev": "nodemon index"