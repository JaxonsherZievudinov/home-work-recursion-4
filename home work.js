// task1
// function sum(num){
//      if ( num <= 0){
//         return 0
//      }
//      return num%2==0 ? ( num-1)+sum(num-3): num+sum(num-2)
// }
// console.log(sum(8));

// task2
// function sum(num){
//     let cnt=0
//     return (a) =>{
//        if(a>cnt){
//         cnt=a
//        }
//        return cnt
//     }
// }
// let second =sum()
// console.log(second(10));
// console.log(second(20));
// console.log(second(10));


// task3
// function func(num){
//     if ( num <= 0) {
//       return 0
//     }  
//    return num % 10 + func(Math.floor(num/10))
// }
// console.log(func(1101));


// task4
// function sumFunc (num = 0){
//    return (b) => {
//       return num = num + b
//    }
// }
// let second = sumFunc ()
// console.log(second(3));
// console.log(second(5));

// task5
// function  func (num = 0, cnt = 1){
//       return (b) => {
//          return num = (num + b)/cnt++
//       }
// }
// let second = func()
// console.log(second(10));
// console.log(second(15));

// task6
// function sum(){

// }
// console.log(sum);

// task7
// function sum(a, b) {
//     let c = a;
//     return function() {
//       let sum1 = c;
//       c += b;
//       return sum1;
//     };
//   }
// console.log(sum(2)());
// console.log(sum()());
// console.log(sum()());


// task8
// function sum(){

// }
// console.log(sum);

// task9
// function sum(a) {
//     let cnt=a
//     return ()=>{
//          cnt=a+a
//          return cnt
//     }
// }
// let sum1=sum(2)
// console.log(sum1());
// console.log(sum1());

// task10
// function sum(a) {
//     return (b)=>{
//         if(b%3==0) return true
//         else return false
//     }
// }
// let sum1=sum(3)
// console.log(sum1(12));
