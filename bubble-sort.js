/*
function BUBBLESORT(ARRAY)							            (1)
    # loop through the array multiple times
    loop INDEX1 from 0 to size of ARRAY – 1					    (2)
        # consider every pair of elements except the sorted ones
        loop INDEX2 from 0 to size of ARRAY – 1 – INDEX1			(3)
            if ARRAY[INDEX2] > ARRAY[INDEX2 + 1] then			(4)
                # swap elements if they are out of order
                TEMP = ARRAY[INDEX2]						    (5)
                ARRAY[INDEX2] = ARRAY[INDEX2 + 1]				(6)
                ARRAY[INDEX2 + 1] = TEMP					    (7)
            end if
        end loop
    end loop
end function
*/

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

/*
// Create an array of numbers and pass it to the BUBBLESORT function
let testNums = [9,0,5,6,7,2,1,3];
let testNumArr = [];
testNumArr.push(...testNums);

BUBBLESORT(testNumArr);
console.log(testNumArr);
*/

/*
// Create an array of strings and pass it to the BUBBLESORT function
let testStrs = ['9','0 ','5','6 ',' 7','2',' 1',' 3 '];
let testStrArr = [];
testStrArr.push(...testStrs);

BUBBLESORT(testStrArr);
console.log(testStrArr);
*/

/*
// Create an array of numbers and strings and pass it to the BUBBLESORT function
let testNumStrs = ['a','0 ',5,'6 ',' 7',2,' 1',' 3 '];
let testNumStrArr = [];
testNumStrArr.push(...testNumStrs);

BUBBLESORT(testNumStrArr);
console.log(testNumStrArr);
*/
