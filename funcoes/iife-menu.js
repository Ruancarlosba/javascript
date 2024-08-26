/*function unit() {
    let isvalue = true
    console.log("unit menu",isvalue)
}
unit()*/

 // (function(){})() - funçao auto invocável 
 (function(n1, n2, n3){
    let isvalue = true
    console.log(" menu",isvalue,n1,n2,n3) 

    function unit() {
        console.log("unit do menu")
    }
    unit()
 })(10, 25, 38)