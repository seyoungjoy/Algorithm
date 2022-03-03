//가위바위보 게임에서 승자를 알려주는 프로그램
//A가 이기는 경우
//1일때 B가 3
//2일때 B가 1
//3일때 B가 2
//A=B 같다면 무승부
//그게 아니라면 나머지 경우는 모두 B가 이기는 경우

//my answer
function solution2(n, arrA, arrB) {
    let answer = "";
    for (let i = 0; i < n; i++) {
        if (arrA[i] === 1 && arrB[i] === 3 || arrA[i] === 2 && arrB[i] === 1 || arrA[i] === 3 && arrB[i] === 2) answer += "A ";
        else if (arrA[i] === arrB[i]) answer += "D ";
        else answer += "B ";
    }
    return answer;
}
let n = 5;
let arrA = [2, 3, 3, 1, 3];
let arrB = [1, 1, 2, 2, 3];
console.log(solution2(5, arrA, arrB));

//my answer 노가다 ver.
function solution(n, arrA, arrB) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        if (arrA[i] === 1 && arrB[i] === 3) {
            answer.push("A");
        } else if (arrA[i] === 1 && arrB[i] === 2) {
            answer.push("B");
        }
        if (arrA[i] === 2 && arrB[i] === 1) {
            answer.push("A");
        } else if (arrA[i] === 2 && arrB[i] === 3) {
            answer.push("B");
        }
        if (arrA[i] === 3 && arrB[i] === 2) {
            answer.push("A");
        } else if (arrA[i] === 3 && arrB[i] === 1) {
            answer.push("B");
        }
        if (arrA[i] === arrB[i]) {
            answer.push("D")
        }
    }
    return answer;
}

// console.log(solution(5, arrA, arrB));

//standard answer
function stdSolution(a,b){
    let answer="";
    for(let i=0; i<a.length; i++){
        if(a[i]===b[i]) answer += "D ";
        else if(a[i]===1 && b[i]===3) answer +="A ";
        else if(a[i]===2 && b[i]===1) answer +="A ";
        else if(a[i]===3 && b[i]===2) answer +="A ";
        else answer += "B";
    }
    return answer;
}