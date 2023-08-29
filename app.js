require('dotenv').config()
const express=require('express')
const app=express()
// const bodyParser=require('body-parser')
// const jsonParser=bodyParser.json()
// const fs=require('fs')
// const Customer = require('./schema');
// const Partner = require('./schema copy')
// const mongoose=require('mongoose')


// const uri = "mongodb+srv://shourya:hdX01aEJbQBqL0Df@cluster0.wbqch.mongodb.net/e-commerce?retryWrites=true&w=majority"
// mongoose.connect(uri,
// { 
//     useNewUrlParser:true, 
//     useUnifiedTopology:true
// }
// )

const hostname= process.env.BASE_URL
const port  = process.env.PORT || 3002

app.get('/', (req,res)=>{
    res.send("hello world");
})
// app.post('/login',jsonParser, (req,res)=>{
//     Customer.findOne({email: req.body.email}).then(result=>{
//         if(result.password=== req.body.password){
//             res.status(200).send(result)
//         }
//         else{
//             console.log('user is not valid')
//             res.status(400).end()
//         }
//     }).catch(err=>res.status(500).end())
    
// })

// app.post('/register', jsonParser, (req,res)=>{
//     var name;
//     console.log(req.body.name)
//       const data= new Customer({
//           _id: new mongoose.Types.ObjectId(),
//           name: req.body.name,
//         email: req.body.email,
//          password: req.body.password,
//          walletAddress : "",
//          orders : []
          
//       })
//       data.save().then(result=>{
//           res.status(201).json(result)
//           console.log(result)
//           name = result.name;
//       }).catch(err=>res.status(500))
      
//   })

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

//   app.put('/ordered',jsonParser, (req,res)=>{
//     console.log(req.body.order)
//     Customer.updateOne({_id: req.body._id}, {$push:{orders: req.body.order}}).then(() => {
//         return Customer.findOne({ _id: req.body._id });
//       }).then(updatedCustomer => {
//         res.status(201).json(updatedCustomer.orders);
//       }).catch(err=>
//             console.warn(err))
   
//   })

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




app.listen(port, hostname, ()=>{
    console.log(`listening at http://${hostname}:${port}`)
})