let n = 1 ;
let n_new = "";
while(n<=100){
  	if(n % 3 == 0){
    	n_new = "Fizz";
      	console.log(n_new);
    }
  	if(n % 5 == 0){
    	n_new = "Buzz";
      	console.log(n_new);
    }
  	if((n % 5 == 0) && (n % 3 == 0)){
  		n_new = "FizzBuzz";
    	console.log(n_new);
  	}
  	else{
  		n_new = n
      	console.log(n_new);
 	}
  	n += 1;
}