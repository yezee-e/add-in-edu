## JavaScript

### 브라우저 객체 메서드 종류

1. open("url","새창이름","새창옵션") -url페이지를 새창으로 나타냄
2. alert(data) -경고창
3. prompt("질문","답변") -질의응답 창
4. confirm("질문내용") - 확인,취소창

`window.open('winpopup.html', 'pop1', 'width=300'`  
팝업창을 나타냄(open페이지와 나타날 페이지가 필요하기 때문에 2개의 웹페이지 필요)

1. 새 창의 페이지 주소
2. 창의 이름
3. 창의 크기

### 객체 메서드

`setAttribute("속성명","새 값")` 선택한 태그의 지정한 속성을 새값으로 바꿉니다
ex> 이미지 넘기기

```js
var num = 1;
function gallery(direct) {
  if (direct) {
    if (num == 7) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  var imgTag = document.getElementById('photo');
  imgTag.setAttribute('src', `images/${num}.jpg`);
}
```

### 일정한 시간 간격으로 코드 실행하기

1. setInterval(function(){},초) /clearInterval(참조변수)
2. setTimeout(function(){},초) /clearTimeout(참조변수)

### 함수의 실행순서

```js
function f01() {
  document.write('f01 실행');
  f02();
  document.write('f01 종료');
}
function f02() {
  document.write('f02 실행');
  f03();
  document.write('f02 종료');
}
function f03() {
  document.write('f03 실행');
  document.write('f03 종료');
}
```

실행순서: **f01 실행 -> f02실행 -> f03실행 -> f03종료 -> f02종료 -> f01종료**

f01 실행에서 시작해서 자신을 호출한 함수로 들어가서 f03종료 후에는 본인을 호출한 함수로 돌아가 나머지 실행순서를 정리
즉,

### 반복문의 흐름제어

break, continue, return

### 재귀함수

함수 정의문 내에서 작성한 코드로 함수를 다시 호출하는 것을 재귀 함수 호출이라고 한다  
함수를 반복문처럼 여러 번 호출하기 위해 사용

```js
// 재귀함수호출 예재
var num = 0;
function testFnc() {
  num++;
  document.write(num, '<br>');
  if (num == 10) return;

  testFnc(); //반복문처럼 testFnc을 여러번 호출하기 위해 사용한다
}
testFnc();
```

### 전역함수와 지역함수의 차이

전역함수: js는 어디에서든 사용할 수 있는 함수
지역함수: 함수 스코프에서만 사용할 수 있는 함수

```js
function 함수명1() {
  js코드; //전역함수
}

function 함수명2() {
  function 함수명3() {
    js코드; //지역함수
  }
}
```
