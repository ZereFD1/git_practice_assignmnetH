// Q. Check if given string is palindrome or not.


let string="vikas";

let bag="";

for(i=string.length-1;i>=0;i--){
    bag=bag+string[i];
}

if(bag===string){
    console.log("Yes");
}
else{
    console.log("No");
}