//대문자로 이루어진 영어단어가 입력되면,
//단어 

function solution(s){
   let answer = "";
   for(let x of s){
       if(x === 'A'){
           answer += "#";
       } else{
           answer += x;
       }
   }
   return answer;
   
}

let str="BANANA";
console.log(solution(str));

