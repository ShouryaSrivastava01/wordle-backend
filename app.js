require('dotenv').config()
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const jsonParser=bodyParser.json()
const cors = require('cors')
// const fs=require('fs')
// const Customer = require('./schema');
// const Partner = require('./schema copy')
const Word = require('./scheme')
const mongoose=require('mongoose')


const uri = "mongodb+srv://shourya:hdX01aEJbQBqL0Df@cluster0.wbqch.mongodb.net/wordle?retryWrites=true&w=majority"
mongoose.connect(uri,
{ 
    useNewUrlParser:true, 
    useUnifiedTopology:true
}
)

const port  = process.env.PORT || 3002

const allowedOrigins = ['http://127.0.0.1:3001','http://localhost:3001','https://techwordle.netlify.app'];

// Configure CORS
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.get('/', (req,res)=>{
    res.send("hello world");
})


//   app.post('/register-partner', jsonParser, (req,res)=>{
//     var name;
//       const data= new Partner({
//           _id: new mongoose.Types.ObjectId(),
//           name: req.body.name,
//         email: req.body.email,
//          walletAddress : req.body.walletAddress,
//       })
//       data.save().then(result=>{
//           res.status(201).json(result)
//           console.log(result)
//           name = result.name;
//       }).catch(err=>res.status(500))
      
//   })
app.post('/words', jsonParser, (req, res) => {
    Word.findOne({ _id: req.body._id }).then(word => { 
      if (word) {
        res.status(200).json(word.words);
      } else {
        res.status(404).json({ message: 'Word not found' }); 
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' }); 
    });
  });
  

//   app.put('/action',jsonParser, (req,res)=>{
//     console.log(req.body.order)
//     Customer.updateOne({ _id: req.body._id, "orders.id": req.body.orderId },
//     { $set: { "orders.$.status": req.body.status } }
//         ).then(() => {
//             return Customer.findOne({ _id: req.body._id });
//           }).then(updatedCustomer => {
//             res.status(201).json(updatedCustomer.orders);
//           }).catch(err=>
//                 console.warn(err))
   
//   })
//   app.put('/loyalregister', jsonParser, (req,res)=>{
//     Customer.updateOne({_id: req.body._id}, {$set :{walletAddress: req.body.walletAddress}}
//         ).then(result=>res.status(200).json(result)
//     ).catch(err=>console.warn(err));
//         }
//   )




app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})