// # 두개씩 별찍기
// *
// ***
// *****
// *******
// *********

let star = '';
for( let i = 0; i < 5; i++ ){
    for ( let j = 0; j <= (i * 2); j++ ){
        star += '*';
    }
    star += '\n';
}
console.log(star);