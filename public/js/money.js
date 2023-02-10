const search = document.querySelector('.checkSearch')
const blog = document.querySelectorAll('.blog')
const names = document.querySelectorAll('.name')


search.addEventListener("input",()=>{
    let key = [] //check key
    const check = search.value

    names.forEach((n)=>{
        if(check === ''){
        key.push(true)
        }else{
            key.push(n.innerHTML.includes(check))
        }
    })

    blog.forEach((item,index)=>{
        if(key[index] === true){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
})