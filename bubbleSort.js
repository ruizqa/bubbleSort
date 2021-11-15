function bubbleSort(array){
    sorted=false;
    while(sorted==false){
    flag=true;
    for(let i=0; i<array.length-1; i++){
        if(array[i]>array[i+1]){
            [array[i+1], array[i]] = [array[i], array[i+1]];
            flag= false;
           
        }
    }

    if(flag==true){
        sorted= true; // fast exit
    }

}

    return array;

}

console.log(bubbleSort([5,2,3,4,1,7,14,2]));


// Classify the following functions according to their Big O Time Complexity


// O(n) notation - increases linearly

function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

// O(1) notation - constant time 

function findNth(arr, n){
    console.log(arr[n]);
}

// O log(n) - n gets reduced by half with each iteration

function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

// O(n^2)

function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}