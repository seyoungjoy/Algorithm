//가위바위보 게임에서 승자를 알려주는 프로그램
//a와 b가 같으면 비김
//A의 선택지가 3개밖에 없기 때문에 각각의 승리 조건들을 한번에 적어볼수 있다.
//1일때 승리조건 3
//2일때 승리조건 1
//3일때 승리조건 2
//같으면 비김
//그 외에는 패배

//my answer1 => 노가다
function solution(n, arrA, arrB){
    let answer = [];
    for(let i=0; i<n; i++){
        if(arrA[i] === 1 && arrB[i]===3){
            answer.push("A");
        } else if(arrA[i] === 1 && arrB[i]===2){
            answer.push("B");
        }
        if(arrA[i] === 2 && arrB[i]===1){
            answer.push("A");
        } else if(arrA[i] === 2 && arrB[i]===3){
            answer.push("B");
        }
        if(arrA[i] === 3 && arrB[i]===2){
            answer.push("A");
        } else if(arrA[i] === 3 && arrB[i]===1){
            answer.push("B");
        }
        if(arrA[i]===arrB[i]){
            answer.push("D")
        }
    }
    return answer;
}

// console.log(solution(5, arrA, arrB));

//my answer2
function solution2(n, arrA, arrB){
    let answer = [];
    for(let i=0; i<n; i++){
        if(arrA[i]===arrB[i]){
            answer.push("D");
        }
        if(arrA[i]===1){
            arrB[i]===3 ? answer.push("A") : answer.push("B");
        }
        if(arrA[i]===2){
            arrB[i]===1 ? answer.push("A") : answer.push("B");
        }
        if(arrA[i]===3){
            arrB[i]===2 ? answer.push("A") : answer.push("B");
        }
    }
    return answer;
}
let n = 5;
let arrA = [2,3,3,1,3];
let arrB = [1,1,2,2,3];
console.log(solution2(n,arrA,arrB));