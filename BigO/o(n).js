const nemo = ['nemo'];

const large = new Array(100000).fill(nemo)

function findNemo(array){
    // le t0 = performance.now();
    for(let i = 0; i< array.length; i++){
        // what is we console.log here?
        console.log('running')
        if(array[i] === 'nemo'){
            console.log('Found Nemo');
            break;
        }
    }
    
    // let t1 = performance.now();
    // console.log('Call to find Nemo took '+ (t1-t0) + 'millseconds');
}

findNemo(large); //O(n) ===> this is linear Time.  n represent anything. It is the number of operations

// There is also O(1): Constant time => No matter how inputs increase up, number of operations don't increase.