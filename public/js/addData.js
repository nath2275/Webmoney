const datas = document.querySelectorAll('.input_data')
const submit = document.querySelector('.submit')
const warn = document.querySelectorAll('.checkKey')
const btn = document.getElementById('bt')

btn.addEventListener('click', function() {
    let  checkKey = []
    datas.forEach((data,index)=>{
        if(data.value === ''){
            checkKey.push(false)
            data.style.border = '1.5px solid #d32626'
        }else{
            checkKey.push(true)
            data.style.border = '1.5px solid rgb(186, 193, 199)'
        }
    })

    warn.forEach((w,i)=>{
        if(checkKey[i]){
            w.style.display = 'none'
            
        }else{
            w.style.display = 'block'
        }
    })

    let test
    if(checkKey[0] && checkKey[1] && checkKey[2] && checkKey[3]){
        test = true
    }else{
        test = false
    }

    if(test){
        submit.type="submit"

    }else{
        submit.type="button"            
    }
})


datas.forEach((d,id)=>{
    d.addEventListener('input',()=>{
        if(d.value !== ''){
            warn.forEach((w,idw)=>{
                if(id === idw){
                    w.style.display = 'none'
                    d.style.border = '1.5px solid rgb(186, 193, 199)'
                }
            })
        }
    })
})