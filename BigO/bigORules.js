//  1.  Worst Case:  When calculating Big O, we always think about the worst case
          // => Even if what we are looking in the array is the first and it will run once, Big O doesn't care.
          // => But when the what we are search for is the last in the array, we will loop over untill the very last. 

//  2.  Remove Constant
   // Example function to remove indices and unknowns

      // Example function
function printFirstItemThenFirstHalfThenSayHi100Times(items){
	console.log(items[0]); // O(1)

	var middleIndex = Math.floor(items.length/2); //n/2

	var index = 0; 
	while ( index < middleIndex){ 
		console.log(items[index]); 
		index ++; 
	}

	for (var i = 0; i < 100; i++){  // 100
		console.log('hi')
	}
}

O(1+ n/2 + 100) // This is the Big O of this function (step1)
     // Removing the constance
O(n)

//  3.  Different terms for inputs

//Example


//  4.  Drop Non Dominant

// Function example

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function(number) {    // O(n)
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function(firstNumber) {     // O(n)
    numbers.forEach(function(secondNumber) {   // O(n)
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// The big O will be:
O(n + (n * n));
O(n + n ^ 2);

// Delete non dominant 

O(n ^ 2);




// Example2

function compressBoxesTwice(boxes){
	boxes.forEach(function(boxes){ 
			console.log(boxes);
	});   // O(n)

	boxes.forEach(function(boxes){
		console.log(boxes)
	});  // O(n)
}
// The BigO of the above function is 

O(n + n) = 2n 
O(2n)

// droping constance

O(2n) = O(n)



