function palindrome_checker(){
    let word=document.getElementById("input_txt").value;
    let original=word;
    // word = word.toLowerCase();
    console.log(original)
    let result=word;
    word=word.split("").reverse().join("");
    console.log(word);
    if(result===word){
        document.getElementById("result").innerHTML="The given word "+original+" is Palindrome";
    }
    else{
        document.getElementById("result").innerHTML="The given word "+original+" is not a Palindrome";
    }
    document.getElementById("input_txt").value=" ";
}