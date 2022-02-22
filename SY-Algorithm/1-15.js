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

function solution(str){
    let centerNumber = 0;
    if(str.length%2){
        //홀수일때 가운데 구하기
        centerNumber = Math.ceil(str.length/2);
        return str[centerNumber-1];
    } else{
        //짝수일때
        centerNumber = Math((str/length)/2);
        console.log(centerNumber)

    }
}

let answer = solution('stuudy');

console.log(answer);
