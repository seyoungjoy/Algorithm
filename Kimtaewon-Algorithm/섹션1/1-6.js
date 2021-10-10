

function solution(arr){
    let answer, nmi=Number.MAX_SAFE_INTEGER; //min을 최대한 큰 수로 먼저 잡아줘야 아래에서 다른 값들과 비교할 때 편리하기 때문.
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min) min=arr[i];
    }
    answer=min;
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));