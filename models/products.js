// npm install mongoose

const mongoose = require('mongoose')

//เชื่อม mongoDB
mongoose.set('strictQuery', false);
const dbUrl = 'mongodb+srv://nut:30082546@cluster0.xqdjphd.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err => console.log(err))

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name: String,
    balance:Number,
    interest:Number,
    datelines:String
})

//สร้าง Model
let Product = mongoose.model("users",productSchema)

//ส่งออก Model
module.exports = Product

// save ข้อมูล

module.exports.saveProduct = (model,data)=>{
    model.save(data)
}





