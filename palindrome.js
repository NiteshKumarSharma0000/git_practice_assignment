let str="naman";
let bag1="";
let bag2="";
for(let i=0;i<=str.length-1;i++){
   bag1+=str[i];
}for(let i=str.lenght-1;i>=0;i--){
   bag2+=str[i];
}if(bag1==bag2){
console.log(" palindrome");

}else{
 console.log("not palindrome");
}