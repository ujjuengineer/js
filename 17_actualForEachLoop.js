// actually for each loop take 3 arguments, value, index, array

let arr = ["ujjwal", "ganesh", "kaushal", "kalua", "ashutosh"]

// taking value
arr.forEach((value) => {
    console.log(value);
}
)

// taking value and index
arr.forEach((value, idx) => {
    console.log(`value = ${value} at index = ${idx}`);
})

// taking value, index and arr
arr.forEach((val, idx, arr) => {
    console.log(`name : ${val}`);
    console.log(`array : ${arr}`);
})