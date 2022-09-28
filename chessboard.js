for (let row = 1; row <= 8; row += 1){
    let str = "";
  for ( let col=1; col <= 8; col += 1){
      if(row % 2 == col % 2){
            str += "#";
      }
        else{
            str += " ";
        }
  }
   console.log(str)
}