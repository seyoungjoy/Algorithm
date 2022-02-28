//보이는 학생
//n명의 학생을 일렬로 세움
//이때 선생님이 맨 앞에서 봤을 때 보이는 사람 숫자를 계산
//앞에 서 있는 사람보다 커야지 보임
//앞에 서 있는 사람이랑 같거나 작으면 보이지 않음.

function solution(arr){
   let answer=1;
   let max=arr[0];
   for(let i=1; i<arr.length; i++){
       if(arr[i]>max){
           answer ++;
           max=arr[i];
       }
   }
   console.log(answer)
}

let studentHeightArray = [130,135,148,140,145,150,153];
solution(studentHeightArray); //5
