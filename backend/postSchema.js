const mongoose = require('mongoose');
const postSchema = mongoose.Schema(
    {
        
        Title:{
            type:String,
            required: true
        },
        Description:{
            type:String,
            required: true
            
        },
        User:{
            type:String,
            required: true
        }
    }
)
const comSchema = mongoose.Schema(
    {
        Community:{
            type:String,
            required:true
        },
        Posts:{
            type:[postSchema],
            required:true
        }
    }
)

const Coms = mongoose.model('Coms',comSchema);
module.exports = Coms;
