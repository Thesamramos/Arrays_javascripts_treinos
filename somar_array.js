function somarArray(array){
    var total = 0; 
    for (var i = 0; i < array.length; i++) { 
            total += array[i];
    } return total;
}

console.log(somarArray([1,2,3]))