//가장 긴 문자열
//N개의 문자열이 입력되면 그 중 가잔 긴 문자열을 출력해라
//첫 줄에 자연수 N
//두번째 줄부터 N개의 문자열이 주어짐.
//문자열의 길이는 100을 넘지 않는다.


function solution(strArray){
    let answer ="";
    let max = 0;

    strArray.forEach(item =>{
        if(item.length > max){
            max = item.length;
            answer = item;
        }
    })
    return console.log(answer);
}

let exampleArray = ["teacher", "time", "student", "beautiful", "good"];

solution(exampleArray);
