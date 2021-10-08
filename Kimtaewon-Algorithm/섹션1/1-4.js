//반복문을 활용
// = 0 + 1
// = 1 + 2
// = (1+2) + 3
// = (1+2+3) + 4
// = (1+2+3+4) + 5
// = (1+2+3+4+5) + 6 = 21

//그리고 뽑아낸 값들을 누적...
function solution(n){
    let answer = 0;//처음에 변수 선언 및 숫자 할당을 해주지 않으면 NaN 값이 뜸.
    for(let i=1; i<=n; i++){
        // 방법1 - for문
        // answer = answer+i;
        // answer += i;


        // 방법2 - 재귀함수
        // const sum=n => {
        //     if(n===1){
        //         return 1
        //     }
        //     return n+sum(n-1);
        // }
        
        
    }
    return answer;
}
// console.log(solution(6));