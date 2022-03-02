// # 가운데 정렬 삼각형 별찍기
//     *
//    ***
//   *****
//  *******
// *********

let star = '';
for( let i = 0; i < 5; i++ ){
    for( let j = 4; j > i; j-- ){
        star += ' ';
    }
    for ( let k = 0; k <= (i * 2); k++ ){
        star += '*';
    }
    star += '\n';
}
console.log(star);