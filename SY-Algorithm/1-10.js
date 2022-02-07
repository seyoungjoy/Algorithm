//문자열의 길이는 100을 넘지 않는다.

function solution(str, el){
    if(str.length > 100){
        alert("문자열은 100을 넘지 않습니다.");
        return
    }

    //반복문을 돌려서
    //if 문으로 R을 찾으면 결과값에 +1을 해준다.
    let answer = 0;
    for(let x of str){
        if(x === el){
            answer += 1;
        }
    }
    return console.log(answer);
}

// solution("COMPUTERPROGRAMMING", "R");

function solution2(str, el){
    let answer = str.split(el).length;
    console.log(answer-1)
}
solution2("COMPUTERPROGRAMMING", "R");