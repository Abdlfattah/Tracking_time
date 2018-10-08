const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const moment = require('moment')

const { TrackedTime } = require('./model/tracked_time')

const port = 3001;; 
const database = 'mongodb://localhost:27017/tracker'

mongoose.Promise = global.Promise;
mongoose.connect(database)

app.use(bodyParser.json())



app.post('/api/post',(req,res)=>{
    const newTrackedTime = new TrackedTime(req.body)
    newTrackedTime.save((err)=>{
        if(err) return res.send({
            success:false,
            msg:err.message
        })
        res.json({success:true})
    })
    
})

app.get('/api/get',(req,res)=>{
    const text = req.query.text
    let query= TrackedTime.find({
        description: { $regex:`${text}`},
    })
    if( req.query.startDate && req.query.endDate ){
        const startDate = moment(req.query.startDate).startOf('day').toDate()
        const endDate =  moment(req.query.endDate).endOf('day').toDate()
        query.find({
            createdAt:{
                $gte:startDate,
                $lte:endDate,
            }
        })
    }
    query.exec((err,items)=>{
        if(err) return res.send({
            success:false,
            msg:err.message
        })
        res.json({
            success:true,
            items
        })
    })
})


app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})