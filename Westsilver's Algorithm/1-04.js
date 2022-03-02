// # 1부터 N까지의 합
// 자연수 N의 값을 입력받아 1부터 N까지의 합을 출력

function solution(n){
    let answer = 0;
    for( let i = 0; i <= n; i++ ){
        answer += i;
    }
    return answer;
}
console.log(solution(10)); // 55