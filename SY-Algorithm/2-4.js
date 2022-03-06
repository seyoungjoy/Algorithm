//총 점수를 계산하는 프로그램
//채점 결과를 입력하면 가산점을 적용해 총 합을 계산해야 한다.
//조건이 참일때 점수가 올라갈 cnt변수가 필요!
//x=1 일때 cnt ++
//x=0 일때 cnt=0;

function solution(answerArr){
    let answer=0, cnt=0;
    for (let x of answerArr){
        if(x===1){
            cnt++;
            answer+=cnt;
        } else{
            cnt=0;
        }
    }
    console.log(answer);
}

let answerArr = [1,0,1,1,1,0,0,1,1,0];
solution(answerArr);
