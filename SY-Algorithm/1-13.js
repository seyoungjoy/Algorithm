//대문자 변환
//대문자는 소문자로
//대문자는 소문자로
//문자열의 길이는 100을 넘지 않는다.

function solution(str){
    answer = ''
    if(str.length >= 100){
        alert('문자열의 길이는 100을 넘지 않습니다.')
        return;
    }
    
    str.split('').forEach(item =>{
        if(item === item.toUpperCase()){
            answer += item.toLowerCase();
        } else{
            answer += item.toUpperCase();
        }
    })
    return console.log(answer)
}
solution('StuDY')