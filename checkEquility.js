// question1 : "Implement a function that returns true if the parameters are equal, and false if they are not."

function checkEquility(param1, param2){
    if(typeof(param1) === typeof(param2)){
        return true
    }else{
        return false
    }
}
console.log(checkEquility('1',"2"))