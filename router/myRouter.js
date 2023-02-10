const express = require('express')
const router = express.Router()
const Product = require('../models/products')

const date = require('../setting/date')

router.get('/',(req,res)=>{
    Product.find().exec((err,doc)=>{
        const today = date.Today();
        let superDate = []
        for(let i = 0;i < doc.length;i++){
            const Date = date.ShoeDate(doc[i].datelines,today)
            const dataAllday = {
                dStart:Date[0],
                dToday:Date[1],
                dPay:Date[2],
                dDate:Date[3],
                dMonth:Date[4],
                dYear:Date[5]
            }
            superDate.push(dataAllday)
        }

        res.render('pages/index',{
            products:doc,
            superDate:superDate
        })
    })
})



router.get('/addData',(req,res)=>{
    res.render('pages/set')
})

//datelines:Number
//เพิ่มฐานข้อมูล
router.post('/addData/insert',(req,res)=>{
    let data = new Product({
        name: req.body.name,
        balance:req.body.balance,
        interest:req.body.interest,
        datelines:req.body.datelines
    })
    console.log(req.body.date);
    Product.saveProduct(data,(err)=>{
        if(err) console.log(err)
        res.redirect('/')
    })
})

//ลบข้อมูล
router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
        if(err) console.log(err);
        res.redirect('/')
    })
})

//แก้ไขข้อมูล
router.post('/edit',(req,res)=>{
    const edit_id = req.body.edit_id
    Product.findOne({_id:edit_id}).exec((err,doc)=>{
        res.render('pages/edit',{products:doc})
    })
    
})

//อัพเดตข้อมูล
router.post('/update',(req,res)=>{
    const update_id = req.body.update_id
    let data = {
        name: req.body.name,
        balance:req.body.balance,
        interest:req.body.interest,
        datelines:req.body.datelines
    }
    Product.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec(err=>{
        if(err) console.log(err);
        res.redirect('/')
    })
})

module.exports = router