// # 역삼각형 별찍기
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

let star = '';
for( let i = 10; i >= 0; i-- ){
    for (let j = 0; j <= i; j++){
        star += '*';
    }
    star += '\n';
}
console.log(star);