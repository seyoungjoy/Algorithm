//10부제
//자동차 번호의 1의 자리 숫자, 날짜의 일의 자리 숫자가 일치-> 해당 자동차 운행 금지
//위반하는 자동차의 개수를 세기
//응용해서 위반하는 자동차의 목록도 출력해보기

function solution(day, arr){
    let answer = 0;
    let carList = Array();

    //배열들의 1의 자리 숫자 구하기
    for(let x of arr){ //arr에 있는 배열들을 하나하나 뽑아낸다.
        if(x%10==day){ //각각의 숫자들을 10으로 나누었을 때의 나머지는 1의 자리 숫자,
            //즉 1의자리 숫자와 day 값이 일치하면 answer에 +1을 해줌으로써 10부제를 지키지 않은 자동차의 숫자를 알 수 있다.
            answer++;
            carList.push(x);
        }
        lastAnswer = `${answer} : ${carList}`;
    }
    return lastAnswer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
