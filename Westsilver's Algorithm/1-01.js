// # 세 수 중 최소값
// 100이하의 자연수 A, B, C 중 가장 작은 값(최솟값)을 출력

function solution( a, b, c ){
    let answer;
    if( a < b ) answer = a;
    else answer = b;
    if( c < answer ) answer = c;
    return answer;
}
console.log(solution(9, 11, 3)); 
//answer ===> 3