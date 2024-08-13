const 시작_시간 = new Date();

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);

  const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
  const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
  const timeH1 = document.querySelector(".time");
  // .padStart(maxLegth, ?fillString) => 최대 길이, 어떤 문자열로 채울것인지
  // toString() => 문자열로 변환

  timeH1.innerText = `${분}:${초}`;
  // 문자열 표현 방식 : '' / "" / ``
  // `` : `${}` 중괄호 안에 변수를 넣을 수 있으며 변수값 자체가 문자열로 표현
}

setInterval(setTime, 1000);
