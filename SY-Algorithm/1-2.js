//나의 풀이
function solution(a, b, c){
    if(a>b) max=a;
    else max=b;
    if(max>c) max=max;
    
    if(a+b+c-max > max) console.log("yes");
    else console.log("no");
    
 }

 console.log(solution(6, 7, 11));

 //강의 참고 풀이
 function solution(a,b,c){
     let answer="YES";
     let max;
     let sum=a+b+c;

     if(a>b) max=a;
     else max=b;
     if(c>max) max=c;
     if((sum-max)>=max) answer="NO";
     return answer;
 }
 console.log(solution(6,7,11));
