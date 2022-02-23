//중복문자제거
//소문자로 된 문자열이 입력되면
//중복문자 제거
//문자열의 순서는 유지

//모두 쪼개서 반복문으로 돌리다가
//중복된게 나오면 빼고 넣어버리자

function solution(str){
    let answer;
    str.split('').forEach((item,idx) =>{
        // console.log(item,idx)
        if(item[idx] !== item[idx+1]){
            console.log(item[idx]);
        }
    })

}

solution('hhhhhhhiiiiii');
//hi
