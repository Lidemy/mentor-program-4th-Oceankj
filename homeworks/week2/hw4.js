function printFactor(n) {
  for(var counter=1;counter<=n;counter++){
      if(n%counter==0){
        console.log(counter);
      }
  }
}

printFactor(10);
