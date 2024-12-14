// task 1
// function sum(a) {
//     if(a==0){
//         return a
//     }
//     return a%10 + sum(Math.floor(a/10))
// }
// console.log(sum(121));

// task2
// function sum(a,b=10) {
//    if(b==1){
//     return a*b
//    }
//      return a*b+sum(a,b-1)
// }
// console.log(sum(6));

// task3
// function sum(a,b){
//      if(b==0){
//         return a
//      }
//      return sum(b,a%b)
// }
// console.log(sum(8,12));

//                                           task4
// function sum(a) {
//     if(a==0){
//         return 
//     }
//     return sum(a/2)
// }
// console.log(sum(125));

// task5
// function sum(a) {
//     return(b)=>{
//         return b+a
//     }
// }
// let sum1=sum("lu")
// console.log(sum1("sum"));

// task6
// function sum(a) {
//     return(b=0)=>{
//         return(w=0)=>{
//             return(e=0)=>{
//                 return(r=0)=>{
//                     return(t=0)=>{
//                             return a+b+w+e+r+t
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(sum(1)(1)()()(1)());


// task7
// function sum(a){
//    return (b)=>{
//     return a=a+b
//    }
// }
// let sum1=sum(5)
// console.log(sum1(10));
// console.log(sum1(10));

// task8
// function sum(a) {
//     if(a==1 || a==0){
//         return a
//     }
//     return a*sum(a-2)
// } 
// console.log(sum(0));


// task9
// function sum(a) {
//     let cnt=0
//     return ()=>{
//       cnt++
//       if(cnt>a){
//         return "вызов не происходит"
//       }
//       else return cnt
//     }
    
// }
// let sum1=sum(4)
// console.log(sum1());
// console.log(sum1());
// console.log(sum1());
// console.log(sum1());
// console.log(sum1());


//                           task10
// function sum(a,b) {
//     if(b==0){
//         return a
//     }
//     return b*sum(a,b-1)
// }
// console.log(sum(2,4));
