let book={}
function getvalue(key,value,index=null,indexKey=null){
console.log(value);
if(index==null){
    book[key]=value;
}
else if(key=="education" || key=="project" || key=="experience"){
    if(!book[key]){
        book[key]=[]
    }
    if(!book[key][index]){
        book[key][index]={}
    }
        book[key][index][indexKey]=value;
    }else if(key=="personaldetails"){
        if(!book[key]){
            book[key]={}
        }
            book[key][index]=value
    }else if(indexKey==null){
        if(!book[key]){
            book[key]=[]
        }
             book[key][index]=value
        }

display()
}
function display(){
document.getElementById("view").innerHTML=JSON.stringify(book);
}
function store(){
if(!localStorage.getItem("resume")){
localStorage.setItem("resume",JSON.stringify([ ]));
}
let res=JSON.parse(localStorage.getItem("resume"));
res.push(book);
localStorage.setItem("resume",JSON.stringify(res))
listing()
}
function listing(){
let new_list=JSON.parse(localStorage.getItem("resume"));
let ele=" ";
for(let i=0;i<new_list.length;i++){
ele=ele+"<li><a target='_blank' href='view.html?name="+new_list[i].name+"'>"+new_list[i].name+"</a></li>"
}
document.getElementById("resume_list").innerHTML=ele;

}
listing()
