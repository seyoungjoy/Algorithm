//가운데 문자 출력
//소문자로 된 문자열이 입력되면
//그 단어의 가운데 문자를 출력
//길이가 짝수일 경우 가운데 문자 2개를 출력

/*
- 길이가 홀수일때 가운데 순서 구하기
2로 나눠서 올림(ceil)
- 길이가 짝수일 때 가운데 순서
나누기 2
*/

//my solution
function solution(str){
    let centerNumber = 0;
    if(str.length%2){
        centerNumber = Math.ceil(str.length/2);
        return str[centerNumber-1];
    } else{
        centerNumber = str.length/2;
        return str.substr(centerNumber-1,2);
    }
}

let exam1 = solution('study');
let exam2 = solution('good');

// console.log(exam1); //u
// console.log(exam2); //oo


//standard solution
function stdSolution(str){
    let answer;
    let mid = Math.floor(str.length/2);
    if(str.length%2){
        answer=str.substr(mid,1);
    } else{
        answer=str.substr(mid-1,2);
    }
    return answer;
}

console.log(stdSolution('study'))
