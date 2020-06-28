function capitalize(str) {
    var output="";
for(var counter=0;counter<str.length;counter++){
    var temp=str[counter];
    var charCode=temp.charCodeAt(0);
    var num=Number(charCode);
    console.log(charCode);
      if(num>=65 && num<=90){
         charCode=charCode+32;
         temp=String.fromCharCode(charCode);
         console.log(temp);
         output=output+temp;
        }
      else{
        output=output+temp
      }
  }
  return output
}

console.log(capitalize('...Hello'));
