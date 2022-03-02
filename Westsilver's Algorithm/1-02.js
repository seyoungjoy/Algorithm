// # 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대로 삼각형을 만들 수 있으면
// 'YES'를 출력하고, 만들 수 없으면 'NO'를 출력

// 삼각형이 만들어 지는 원리
// : 가장 긴 길이의 선보다 짧은 두 길이의 합이 커야 삼각형이 만들어 질 수 있음
// 1. 가장 긴 선의 길이를 구한다.
// 2. 세 선의 길이를 더한 총합의 값에 가장 긴 길이의 값을 뺀 후
//    그 값이 가장 긴 선의 길이보다 크면 YES, 아니면 NO

function solution(a, b, c){
    let long = Math.max( a, b, c);
    let total = a + b + c;
    let result = total - long;
    if( result > long ){
        return 'YES';
    } else {
        return 'NO';
    }
}
console.log(solution(11, 4, 8));
// long=11, total=23, result=12 // result > long ===> YES
console.log(solution(3, 5, 14));
// long=14, total=22, result=8 // result < long ===> NO