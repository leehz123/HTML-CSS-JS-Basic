var outDiv= document.getElementById('out');
var btn3 = document.getElementById('btn3');

function btn3Action() {
    outDiv.innerHTML = 'Hello, Javascript3!!!';

    //자스로 해당요소의 스타일도 수정 가능
    //property는 - 를 이용하지만 자스는 카멜케이스로 수정해서 사용해야 한다. 
    outDiv.style.backgroundColor = 'red';
    outDiv.style.color = 'white';
    outDiv.style.fontWeight = '90 0';
    outDiv.style.fontSize = '35px';
}

//자바스크립트는 함수를 변수처럼 넘기는 것이 가능하다.

//btn3Action() : 해당 함수를 실행하는 것
//btn3Action : 해당 함수를 값으로 사용하는 것

//변수에 함수를 저장할 수 있다.
var myFunc = btn3Action;

//btn3.addEventListener('click', btn3Action);
btn3.addEventListener('click', myFunc);

//자스는 어차피 엔터키로 구분하기 때문에 ; 를 안 써도 정상실행 됨. 근데 보기 좋으라고 쓰는 거
