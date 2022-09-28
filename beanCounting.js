var count = 0;
const countBs = (chuoi) => {
	for(let doDai = 0; doDai < chuoi.length; doDai += 1){
    	if(chuoi[doDai] == "B"){
        	count += 1;
        }
    }
  	return count;
}
console.log(countBs("BahdjadjahsBsjdfhB"));
// → 2
let count1 = 0;
const countChar = (str, key) => {
	for(let i = 0; i < str.length; i += 1){
    	if(str[i] == key){
        	count1 += 1;
        }
    }
  	return count1;
}
console.log(countChar("kakkerlak", "k"));
// → 4