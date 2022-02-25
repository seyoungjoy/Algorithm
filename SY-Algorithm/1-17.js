// ***중복단어제거
// n개의 문자열이 입력되면 중복된 문자열은 제거하고 출력
// 입력 순서 유지

//my solution
function solution(arr){
    let answer = '';
    let a = new Set(arr);
    a.forEach(item => {
        answer += `${item} `;
    })
    return console.log(answer);
}

solution(['good', 'time', 'good', 'time', 'student']);

//standard solution
function stdSolution(s){
  let answer;
  answer = s.filter((v,i) => {
      if(s.indexOf(v) === i) return v;
  })
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(stdSolution(str));

