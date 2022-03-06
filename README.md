# Algorithm
알고리즘 문제 풀이

## 자바스크립트 알고리즘 문제풀이
  
1. [세 수 중 최솟값](SY-Algorithm/1-1.js)<br>
**- 'if'문 간결하게 작성하기**<br>
```
if( a>b ) answer=a;
else answer=b;

//물음표 연산자
a>b ? answer=a : answer=b;
```

---
2. [삼각형 판별하기](SY-Algorithm/1-2.js)<br>
**- 삼각형 만드는 공식**<br>
가장 긴 막대의 길이가 나머지 두 막대의 합보다 크거나 같아야 삼각형이 만들어진다.<br>
이 공식을 이용해 a,b,c 중 최대값 max 를 구해서 해결할 수 있다.
---
3. [연필개수](SY-Algorithm/1-3.js)<br>
**- Math()**<br>
Math.ceil() : 소수점 올림, 정수 반환<br>
Math.floor() : 소수점 버림, 정수 반환<br>
Maht.round() : 소수점 반올림, 정수 반환
---
4. [1부터 N까지의 합](SY-Algorithm/1-4.js)

---

5. [최솟값 구하기](SY-Algorithm/1-5.js)<br>
- Number.MAX_SAFE_INTEGER
자바스크립트에서 안전한 최대 정수를 반환해 준다.<br>
- Math.min/max
```
let arr=[1,3,5];
let answer1 = Math.min(1,3,5);
console.log(answer1); //1 -> 소괄호 안에 인자값이 들어가야 값을 구해준다.

let answer2 = Math.min(arr);
console.log(answer2); //NaN -> 소괄호 안에 배열 자체를 넣으면 값을 구해주지 않는다.

let answer3 = Math.min(...arr);
console.log(answer3); //1 -> 전개연산자를 이용해 Math 를 활용할 수 있다.
console.log(...arr); //1,3,5

let answer4 = Math.min.apply(null, arr);
console.log(answer4); //1
```
- 전개 연산자(...arr)<br>
❗브라우저 호환성 : IE x
---
- filter<br>
[filter algorithm](https://www.notion.so/ES6-a1e92905808b4b8cbe8667b752495b8a);

---
6. [홀수](SY-Algorithm/1-6.js)<br>

---
7. [10부제](SY-Algorithm/1-7.js)<br>
- 일의자리 숫자 구하기<br>
어떤 숫자든 10으로 나누어주면 나머지는 일의 값이 나온다.<br>
23을 10으로 나누면 나머지는 3<br>
2453을 10으로 나누면 나머지는 3<br>
- 배열의 목록을 뽑고 싶을 때는 push 사용!<br>

---
10. [문자 찾기](SY-Algorithm/1-10.js)<br>
- split() : 문자열을 분할하는 메서드.<br>
특정 문자를 찾을때 그 문자를 split으로 분할 한 다음<br>
-1을 해주면 그 문자의 개수를 알 수 있다.<br>
- +=, ++ 줄여쓰기<br>
```
answer = answer + 1;
answer += 1
answer ++
```
---
11. [대문자 찾기](SY-Algorithm/1-11.js)<br>
12. [대문자로 통일](SY-Algorithm/1-12.js)<br>
13. [대소문자 변환](SY-Algorithm/1-13.js)<br>
14. [가장 긴 문자열](SY-Algorithm/1-14.js)<br>
15. [가운데 문자 출력](SY-Algorithm/1-15.js)<br>
16. [중복문자제거](SY-Algorithm/1-16.js)<br>
**- 중복문자찾는 방법**<br>
indexOf 활용<br>
Set : 중복이 허용되지 않는 객체.
```
let x = new Set([1,2,3,4,5]);
//Set(5) {1,2,3,4,5}

x.add(6);
//Set(6) {1,2,3,4,5,6}

x.delete(1);
//Set(5) {2,3,4,5,6}

x.has(2);
//true

x.clear();
//Set(0) {}

x.size;
//0

let str = new Set("하이루");
//Set(3) {'하', '이', '루'}
```
---
17. [중복단어제거](SY-Algorithm/1-17.js)<br>
18. [큰 수 출력하기](SY-Algorithm/2-1.js)<br>
19. [보이는 학생](SY-Algorithm/2-2.js)<br>
20. [가위 바위 보](SY-Algorithm/2-3.js)<br>
21. [점수계산](SY-Algorithm/2-4.js)<br>



