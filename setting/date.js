// const date = '2022-12-01' //วันที่กู้
// const simpleDate = '2022-12-25' // วันนี้

//'2023-01-22'
function Today(){
    let d = new Date(); 
    const today = (d.getFullYear() + '-' + d.getMonth()+1) + '-' + d.getDate()
    return today
}

function ShoeDate(date,simpleDate){
    const simple = simpleDate.split('-').map(item => {
        return parseInt(item)
    })
    const year = date.split('-').map(item => {
        return parseInt(item)
    })
    
    let [yy,mm,dd] = year;
    let nextMonth = mm;
    let nextYear = yy;
    
    if(nextMonth + 1 > 12 ){
        nextMonth = 1
        nextYear += 1
    }else{
        nextMonth += 1;
    }
    let future = [nextYear,nextMonth,dd]
    let dateNumber;


    // คำนวณ เดือนปี ที่มากกว่าเดือนปัจจุบนเท่านั้น
    const d = simple
    const db = future
    let y = 0
    let m = 0
    //y > y ++
    if(d[0] > db[0] && d[1] > db[1] && d[2] > db[2]){
        m = d[1] - db[1]
        y = d[0] - db[0]
    }
    // --,==
    else if(d[0] > db[0] && d[1] > db[1]){
        a = db[1] + 1
        y = d[0] - db[0]
        m = d[1] - a
    }
    // > < >
    else if(d[0] > db[0] && d[1] < db[1] && d[2] > db[2]){
        a = db[0] + 1
        y = d[0] - a
        m = 12 - db[1] + d[1]
    }
    //> < <=
    else if(d[0] > db[0] && d[1] < db[1] && d[0] <= db[0]){
        a = db[0] + 1
        y = d[0] - a
        m = 12 - db[1] + d[1] - 1
    }
    //y = y ++
    else if(d[0] == db[0] && d[2] > db[2] && d[1] > db[1]){
        m = d[1] - db[1]
    }
    // > = >
    else if(d[0] > db[0] && d[1] == db[1] && d[2] > db[2]){
        y = d[0] - db[0]
    }
    // > = <=
    else if(d[0] > db[0] && d[1] == db[1] && d[2] <= db[2]){
        a = db[0] + 1
        y = d[0] - a
        m = 11
    }
    // คำนวณ เดือนปี ที่มากกว่าเดือนปัจจุบนเท่านั้น



    // คำนวณ วัน
    if(nextMonth === simple[1] && dd > simple[2]){
        let y = ['',31,29,31,30,31,30,31,31,30,31,30,31]
        dateNumber = dd - simple[2]
    }
    else if(nextMonth === simple[1]){
        let y = ['',31,29,31,30,31,30,31,31,30,31,30,31]
        dateNumber = simple[2] - dd 
    }
    else if(yy % 4 === 0){
        let y = ['',31,29,31,30,31,30,31,31,30,31,30,31]
        dateNumber = y[mm] - simple[2] + dd
    }else{
        let y = ['',31,28,31,30,31,30,31,31,30,31,30,31]
        dateNumber = y[mm] - simple[2] + dd
    }
    // console.log(`กู้วันที่ ${year}`);
    // console.log(`วันนี้วันที่ ${simple}`);
    // console.log(`เหลืออีก ${dateNumber} วัน`);
    // console.log(`จ่ายดอกวันที่ ${future}`);
    
    let Str_year = year.map((item)=>{
        return item.toString()
    })
    let Str_simple = simple.map((item)=>{
        return item.toString()
    })
    let Str_future = future.map((item)=>{
        return item.toString()
    })
    
    //year
    if(Str_year[1].length === 1){Str_year[1] = '0' + Str_year[1]}
    if(Str_year[2].length === 1){Str_year[2] = '0' + Str_year[2]}
    
    //simple
    if(Str_simple[1].length === 1){Str_simple[1] = '0' + Str_simple[1]}
    if(Str_simple[2].length === 1){Str_simple[2] = '0' + Str_simple[2]}
    
    //future
    if(Str_future[1].length === 1){Str_future[1] = '0' + Str_future[1]}
    if(Str_future[2].length === 1){Str_future[2] = '0' + Str_future[2]}
    
    // console.log(`กู้วันที่ ${Str_year.join('-')}`); // กู้วันที่ 2022,12,1
    // console.log(`วันนี้วันที่ ${Str_simple.join('-')}`); // วันนี้วันที่ 2022,12,25
    // console.log(`จ่ายดอกวันที่ ${Str_future.join('-')}`); // จ่ายดอกวันที่ 2023,1,1
    // console.log(`เหลืออีก ${dateNumber} วัน`); // เหลืออีก 7 วัน
    //console.log(`เหลือ ${m} เดือน ${y} ปี`);
    return [Str_year.join('-'),Str_simple.join('-'),Str_future.join('-'),dateNumber,m,y]
}


module.exports.Today = Today
module.exports.ShoeDate = ShoeDate