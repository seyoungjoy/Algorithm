//최솟값 구하기

// function solution(arr){
//     let answer;
//     let min=Number.MAX_SAFE_INTEGER;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<min) min=arr[i];
//     }
//     answer=min;
//     return answer;
// }

// let arr=[1,2,3,4,5];
// alert(solution(arr));

//[응용:최댓값 구해보기]
// let max=Number.MIN_SAFE_INTEGER;

// function solutionMax(arr){
//     let answer;
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]>max) max=arr[i];
//     }
//     answer = max;
//     return answer;
// }

// let arr = [1,3,5];
// console.log(solutionMax(arr));

//[보충] 내장함수로 최솟값, 최댓값 구하기
let arr=[1,3,5];

let answer = Math.min.apply(null, arr);

console.log(answer);

// function findMaxValue(){
    
// }
// let arr = [1,3,5];


//[응용] : filter 메소드로 구해보기

//고민중 ...

// let arr = [1,2,3,4,5];
// let result = arr.filter(function(){
    
// })