function IsNumberArray(anArray) {
    //set the return value to true
    let returnVal = true;
    for(index=0;index<anArray.length-1;index++){
        console.log(`index: ${index}`);
        //verify that all the values in this array are numbers
        console.log(`isNaN(${anArray[index]}) is `, isNaN(anArray[index]));
        if(isNaN(anArray[index])) {
            //set the return value to false because a non-number was found
            returnVal = false;
            //break from the loop because there is no reason to search the remaining positions
            break;
        }
    }

    // return either true or false based on the findings
    if(returnVal) {
        console.log("This is an array of all numbers");
    }
    else {

        console.log("This array contains at least one value that is not a number");
    }
    return returnVal;
}

function IsItANumberArray(anArray) {
    //set the return value to true
    let returnVal = true;
    for(index=0;index<anArray.length-1;index++){
        console.log(`index: ${index}`);
        //verify that all the values in this array are numbers
        console.log(`Is this value ${anArray[index]} of type number : ${typeof anArray[index]} ${(typeof anArray[index] === "number")}`);
        if(!(typeof anArray[index] === "number")) {
            //set the return value to false because a non-number was found
            returnVal = false;
            //break from the loop because there is no reason to search the remaining positions
            break;
        }
    }

    // return either true or false based on the findings
    // return either true or false based on the findings
    if(returnVal) {
        console.log("This is an array of all numbers");
    }
    else {

        console.log("This array contains at least one value that is not a number");
    }
    return returnVal;
}

function BUBBLESORT(numberArray) {
    console.log("Array parameter: ", numberArray);
    // loop through the array multiple times
    for(let i=0; i<numberArray.length-1; i++) {
        console.log(`------------ i : ${i} ------------`);
        // consider every pair of elements except the sorted ones
        for(let j=0; j<numberArray.length-1-i; j++) {
        console.log(`     ------- j : ${j} -------`);
            console.log(`Is ${numberArray[j]} > ${numberArray[j+1]}?`)
            if(numberArray[j] > numberArray[j+1]){
                console.log(`swap ${numberArray[j]} with ${numberArray[j+1]}!`)
                // swap elements if they are out of order
                let temp = numberArray[j];
                numberArray[j] = numberArray[j+1];
                numberArray[j+1] = temp;
                console.log(`numberArray is now ${numberArray}`);
            }
        }
    }
}

class CustomeError extends Error {
  constructor(message) {
    super(message)
    this.name = 'CUSTOM_ERROR'
    this.code = "THIS_IS_A_CUSTOM_ERROR_CODE";
    this.message = message

  }
}


function foo(anArray) {

    try {
    //Block of code to try
        if(!IsItANumberArray(anArray)) {
            throw new CustomeError("This must be a number-only array.");
        }
    }
    catch(err) {
        //Block of code to handle errors
        console.log(`Error - name:${err.name} - code:${err.code} - message:${err.message}`);
    }
    finally {
        //Block of code to be executed regardless of the try / catch result
        console.log("This section will be executed regardless of the result of the try and catch sections.")
    }

}

let myArray = [99, 5,10, 100];
foo(myArray);

let yourArray = [99, 5,'ten', 100];
foo(yourArray);
