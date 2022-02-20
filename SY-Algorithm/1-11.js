//대문자 찾기
//대문자가 몇개 있는지 찾아내기

//문자를 모두 split으로 쪼갠다음에
//그 문자가 uppercase랑 똑같으면 answer ++

function solution(str){
    answer = 0;
    str.split('').forEach(item =>{
        // console.log(item)
        if(item === item.toUpperCase()){
            answer ++;
        }
    })
    return console.log(answer);
    

}

solution("KoreaTimeGood"); //3