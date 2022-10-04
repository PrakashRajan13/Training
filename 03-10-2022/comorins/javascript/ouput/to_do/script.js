let list=[]
function get(){
    let todo=document.getElementById("input").value;
    list.push(todo);
    document.getElementById("input").value=" ";
    display(list)
}
function display(todo_list){
    element="";
    for(i=0;i<todo_list.length;i++){
        element=element+"<li>"+todo_list[i]+"</li>";
    }
    document.getElementById("ol_list").innerHTML=element;
}
function completed(){

}
function emptylist(){
    var toDoItems = ol_list.children;

    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
}
}
function save(){
    let save_items=JSON.stringify(list);
    localStorage.setItem("todo",list)
}