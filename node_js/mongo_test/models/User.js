const mongoose = require('mongoose');
const { Schema }= mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        requried: true, // 이메일을 생성, 생성되지 않을 경우 데이터가 저장되지 않고 에러코드 뜨게함.
    },
    name:String,
    age:{
        type:Number,
        min: 18,
        max: 50
    },
    enrolled:{
        type:Date,
        default:Date.now()
    },
},
{
    timestamps: true //데이터 생성했을 때, 업데이트 될 때 등 시간 기록.
});

module.exports = mongoose.model('User', userSchema);