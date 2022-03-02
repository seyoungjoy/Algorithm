// # 연필 개수
// 연필 1다스는 12자루이고, 학생 1인당 연필을 1자루씩 나눠 주어야 한다.
// n명의 학생 수를 입력받았을 때 필요한 연필의 다스 수를 계산

// Math()
// 1. Math.ceil : 소수점 올림
// 2. Math.floor : 소수점 버림
// 3. Math.round : 소수점 반올림

function solution(n){
    return Math.ceil( n / 12 );
}
console.log(solution(24)); // ===> 2
console.log(solution(25)); // ===> 3