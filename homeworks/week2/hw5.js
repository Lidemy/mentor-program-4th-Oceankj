function join(arr, concatStr) {
  var output="";
    for(var counter=0;counter<arr.length-1;counter++){
    output=output+arr[counter]+concatStr;
  }
  output=output+arr[counter];
  return output
}

function repeat(str, times) {
    var output="";
    for(var counter=0;counter<times;counter++){
    output=output+str;
  }
  return output
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
console.log(join([1, 2, 3], ''));//，正確回傳值：123
console.log(join(["a", "b", "c"], "!"));//，正確回傳值：a!b!c
console.log(join(["aaa", "bb", "c", "dddd"], ',,'));//，正確回傳值：aaa,,bb,,c,,dddd