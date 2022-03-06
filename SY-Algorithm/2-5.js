//점수 입력하면 등수를 구해주는 프로그램
//hint 이중반복문

//my answer
function solution(n,arr){
    if(!(n>=3 && n<=1000)){
        alert("3~1000에 해당하는 정수를 입력해주세요");
        return;
    } 
    let answer = [1,1,1,1,1];

    for(let i=0; i<n; i++){
        // console.log(arr[i])
        for(let j=0; j<n; j++){
            if(arr[j]>arr[i]) answer[i] ++
        }
    }
    console.log(answer)
}

let n = 5;
let scoreArr= [87,89,92,100,76]
// solution(n,scoreArr)

//standard answer
function stdSolution(arr){
    let n=arr.length;
    let answer=Array.from({length:n}, ()=>1);
    for(let i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(arr[j]>arr[i]) answer[i]++;
        }
    }
    return answer;
}

console.log(stdSolution(scoreArr));