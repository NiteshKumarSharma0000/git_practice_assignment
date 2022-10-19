let count =0;
let num =5;

for(let i=1;i<=5;i++){
	if(num%i==0){
		count++
	}
}if(count==2){
	console.log(num,"is a prime number")
}else{
	console.log(num,"is not a prime number")
}