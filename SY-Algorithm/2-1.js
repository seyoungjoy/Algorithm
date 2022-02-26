//큰 수 출력하기
//1~100까지 정수 중 하나를 입력하면 그 숫자보다 큰 수만 출력

// my answer
// 
function solution(arr){
    let answer = [];
    //첫번째 수는 무조건 출력
    answer.push(arr[0]);
    for(let i=0; i<arr.length; i++){
        if(arr[i-1] < arr[i]) answer.push(arr[i])
    }
    console.log(answer);
}

let answer = [7,3,9,5,6,12];
solution(answer);
