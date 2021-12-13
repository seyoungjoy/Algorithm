//1 홀수인 자연수들을 모두 골라
//2 그 합을 구하고
//3 고른 홀수들 중 최소값을 찾는다.

function solution(arr){
    let answer=[];
    let sum=0;
    let min=Number.MAX_SAFE_INTEGER;
    for(const x of arr){
        if(x%2==1){
            sum=sum+x;
            if(x<min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}


arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));


//[응용] 짝수인 자연수들을 모두 골라
// 그 합을 구하고
// 고른 짝수들 중 최댓값을 찾는다.

function solution(arr){
    let answer=[];
    let sum=0;
    let max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){

        if(x%2===0){
            sum+=x;
            if(x>max) max=x;
        }
    }
    answer.push(sum);
    answer.push(max);
    return answer;

}


arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));