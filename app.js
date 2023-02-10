const express = require('express')
const app = express()
const path = require('path')
const router = require('./router/myRouter')
// npm run dev

// res.send = แสดง text หรือ อ่านไฟล์ แล้วมาแสดงผลได้
// res.redirect = เข้าไปที่ลิ้ง
// res.render = อ่านไฟล์ ejs

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false})) //POST
app.use(express.static(path.join(__dirname,'public')))
app.use(router)
app.listen(3000,()=> console.log("รัน server ที่ port 3000"))