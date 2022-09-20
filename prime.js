

// check if number is prime or not to the given limit using function.


function primeno(no){

    for(let j=1; j<=no; j++){
      
      let factors=0;
      
        for(let i=1; i<=j; i++){
        
              if(j%i==0){
                factors++;
             }
        }
          if(factors==2){
            console.log(j,"is prime");
          }else{
            console.log(j," is not prime");
              }
      
    }

}

primeno(17);