//** 중복문자제거
//소문자로 된 문자열이 입력되면
//중복문자 제거
//문자열의 순서는 유지



function solution(str){
    let answer ="";
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i])===i) answer += str[i];
    }
    return answer;

}

console.log(solution('ksekkset'));
//hi
