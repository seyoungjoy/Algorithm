//반복문 돌려서 97~122인 유니코드가 있다면
//그놈은 uppercase로 대문자로 바꿔버려라

//my solution
function solution(str){
    let resultSplit = str.split('');
    let result = [];
    resultSplit.forEach(item => {
        if(item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122){
            result.push(item.toUpperCase())
        } else{
            result.push(item)
        }
    })
    console.log(result.join(''))
}
// solution('ItisTimeToStudy');

//standard solution1
function standardSolution1(str){
    let answer = "";
    for(let x of str){
        let num = x.charCodeAt();
        if(num >= 97 && num <=122){
            answer += String.fromCharCode(num-32)
        } else{
            answer += x;
        }
    }
    return answer;
}

// let str="KoreaTimeGood";
// console.log(standardSolution1(str))

//standard solution2
function standardSolution2(str){
    let answer ='';
    str.split('').forEach(item =>{
       if(item===item.toLowerCase()){
           answer += item.toUpperCase();
       } else{
           answer += item;
       }
    })
    return answer;
}

let str="KoreaTimeGood";
console.log(standardSolution2(str))