// # 직사각형 별찍기
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const s = data.split(" ");
    const a = Number(s[0]), b = Number(s[1]);
    
    // 작성된 코드
    const row = '*'.repeat(a)
    for(let i=0; i<b; i++){
        console.log(row)
    }

});