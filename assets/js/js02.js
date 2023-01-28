const apple = 123;

if (apple < 1) {
    console.log('사과가 너무 적습니다!');
} else if(apple>50) {
    console.log('사과가 너무 많ㅅㅂ니다!');
} else if (apple%10 == 0) {
    console.log('사과가 딱 나누어 떨어집니다!');
} else {
    console.log('안 나눠 떨어집니다!');
}



//# Javascript boolean

//boolean타입도 있다.. 
//0 이외의 숫자는 모두true취급. 0은 false 
console.log(true && true);
console.log(true && 1); //1
console.log(true && 0); //0
console.log(true && 123); //123
console.log(false && 123); //false
console.log(0 && 123); //0

if(0) {
    console.log('진실입니다.');
} else {
    console.log('거짓입니다.');
}