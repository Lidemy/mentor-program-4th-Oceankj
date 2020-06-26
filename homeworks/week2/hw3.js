function reverse(str) {
  var output="";
    for(var counter=str.length-1;counter>=0;counter--){
    output=output+str[counter];
  }
  console.log(output)
  return output
}

reverse('hello');
