let getInp=document.getElementById('inp')
let getList=document.getElementById('ulist')
let arr
if(localStorage.getItem('item')==null){
    arr=[]
}
else{
    arr=JSON.parse(localStorage.getItem('item'))
    for(i=0;i<arr.length;i++){
        let textNode=document.createTextNode(arr[i].ab)
    let createLi=document.createElement('li')
    createLi.appendChild(textNode)
    createLi.innerHTML+=` <button onclick="del(this.parentNode)">Delete</button> <button onclick="edit(this.parentNode)">Edit</button>`
    getList.appendChild(createLi)
    }
}
function add(){
    if(getInp.value==''){
        alert('Empty strings not allowed')
    }
    else
    {
        let fineString=getInp.value.toLowerCase().split(' ').filter(cv=>cv).join(' ')
        let n=arr.filter((cv)=>{
            return cv.ab.toLowerCase().split(' ').filter(cv=>cv).join(' ')==fineString
        })
        if (n.length){
            alert('Item exist')
            getInp.value=''
        }
        else{
            if(document.getElementById('ulist')==null){
                getList=document.createElement('ul')
                getList.setAttribute('id','ulist')
                document.body.appendChild(getList)
            }
            arr.push({ab:getInp.value})
            localStorage.setItem('item',JSON.stringify(arr))
            let textNode=document.createTextNode(getInp.value)
        let createLi=document.createElement('li')
        createLi.appendChild(textNode)
        createLi.innerHTML+=` <button onclick="del(this.parentNode)">Delete</button> <button onclick="edit(this.parentNode)">Edit</button>`
        getList.appendChild(createLi)
        getInp.value=''
        }
    }
}
function edit(a){
    let ed=prompt('Enter updated value')
    if (ed){
    let fineString=ed.toLowerCase().split(' ').filter(cv=>cv).join(' ')
        let n=arr.filter((cv)=>{
            return cv.ab.toLowerCase().split(' ').filter(cv=>cv).join(' ')==fineString
        })
        if (n.length){
            alert('Item exist')
            getInp.value=''
        }
        else{
            for(i=0;i<arr.length;i++){
                        if((arr[i].ab+' ')==a.firstChild.textContent || (arr[i].ab)==a.firstChild.textContent){
                            arr[i].ab=ed
                            break
                        }
                    }
                    localStorage.setItem('item',JSON.stringify(arr))
                    a.firstChild.textContent=ed+' '
        }
    }
    else{
        alert('Empty strings are not allowed')
    }
}
function del(a){
    arr=arr.filter((cv)=>{
        return !(cv.ab==a.firstChild.textContent || (cv.ab+' ')==a.firstChild.textContent)
    })
    localStorage.setItem('item',JSON.stringify(arr))
    a.remove()
}
function delAll(){
    getList.remove()
    arr=[]
    localStorage.removeItem('item')
}