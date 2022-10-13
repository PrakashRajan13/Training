let data=JSON.parse(localStorage.getItem("datas"))
let element=" ";
let ele=" "
function home(){
    for(let i=0;i<data.length;i++){
    catagery=data[i].catagery.toLowerCase();
    if(catagery=="home"){
        element+='<div class="card col-4 content pl-0" style="width: 18rem;"><img class="img" id="url" src="'+data[i].img_url+'" class="card-img-top" alt="..."><div class="card-body"><a class="card-text font-weight-bold" id="content" href="view.html?id='+data[i].id+'">'+data[i].Title+'</a><p class="card-text"><small class="text-muted">'+data[i].date+'</small></p></div></div>';
        document.getElementById("sec").innerHTML=element
    }
    }  
    
}
function latestnews(){
    for(let i=0;i<data.length;i++){
    catagery=data[i].catagery.toLowerCase();
    if(catagery=="latestnews"){
        document.getElementById("image"+i).src=data[i].img_url;
        document.getElementById("time"+i).innerHTML=data[i].Title;
        document.getElementById("latestnews"+i).setAttribute("href","view.html?id="+data[i].id+"");
    }
    }  
}