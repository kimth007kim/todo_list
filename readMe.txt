구성
1. 시계 화면이 중앙으로 배치되도록 할것
2. 체크리스트 추가 밑 해제 가능하게 할것
3. 시간이 지나면 리스트 사라지는것도 가능하게 할것
4. (선택)네이버 뉴스도 띄울수 있게 시도 해볼것

알아야 될 사항들

함수 선언문 vs 함수 표현식

함수 선언문

예시
greet();
//함수 선언
function greet(){
	console.log('hi');
}


-반드시 함수이름이 명시되어 있어야 한다.
-함수 이름으로 호출한다 


함수 표현식


const sayHello = function(){ console.log('hello'};

-함수 리터럴로 생성한 함수를 변수에 할당하는 방법을 함수 표현식이라고 한다.
 함수의 참조값이 sayHello라는 변수로 저장된다.
-위의 예에서 sayHello는 함수의 이름이 아니다. function은 익명함수이고 함수 변수인 sayHello를 통해 호출할 수있다.




할작업


1. document.getElementById(); 
-사용하는 방법
var 변수 = document.getElementById(); 
이런식으로 변수에다가 등록을 해놔야 한다.

2.현재 시간 표시하기

2-1)현재시간 따오는 방법
var d = new Date(); 
Date 객체를 사용해서 d 변수에다가 담는다.

2-2)HTML에다가 표시하는 방법
innerHTML을 사용해서 화면에다가 표시할 것이다.

2-3)매초 마다 시간을 바꾸어야한다.
setInterval을 사용할 예정


































