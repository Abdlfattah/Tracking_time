const mongoose = require('mongoose')


const trackedTimeSchema = mongoose.Schema({
    duration:{
        type:Number,
        default:0
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true})


const TrackedTime = mongoose.model('TrackedTime',trackedTimeSchema)


module.exports={
    TrackedTime
}