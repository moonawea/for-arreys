// ===============№1==============
// function myFunction(arr) {
//     return  arr.reverse()
// }
// console .log(myFunction([1, 2, 3] ))
// ===============№2==============
// function myFunction(arr) {
//     arr = [0, 1, false, 2, undefined, '', 3, null];
//     return arr.filter(Boolean);
// }
// console.log(myFunction())
// ===============№3==============
// function checkNum(arr) {
//     let res = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (res.indexOf(arr[i]) === -1) {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
//
// console.log(checkNum([1, 2, 3, 1, 2]));
// ===============№4==============
//  function myFunction(arr1, arr2) {
//     return arr1.concat(arr2)
//  }
//  console.log(myFunction(['a', 'b', 'c'], [1, 2, 3]))
// ===============№5==============
//  function myFunction(arr1, arr2) {
//     return arr1.concat(arr2)
//  }
//  console.log(myFunction([1, 2, 3], 4,5,6))
// ===============№5==============
function myFunction(arr, ...elements) {
    arr.push(...elements);
    return arr;
}
console.log(myFunction([1, 2, 3],(4, 5, 6)))


