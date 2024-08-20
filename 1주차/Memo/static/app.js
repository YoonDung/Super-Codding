// 메모를 생성하는 함수
function createMemo(text) {
  // <li> 요소 생성
  const listItem = document.createElement("li");
  listItem.textContent = text;

  // <ul> 요소에 <li> 요소 추가
  const memoList = document.querySelector("ul");
  memoList.appendChild(listItem);
}

// DOMContentLoaded 이벤트가 발생하면 실행
document.addEventListener("DOMContentLoaded", function () {
  // 폼 및 입력 요소 선택
  const memoForm = document.querySelector("#memo-form");
  const memoInput = document.querySelector("#memo-input");

  // 폼 제출 이벤트 처리
  memoForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const memoText = memoInput.value.trim(); // 입력값의 앞뒤 공백 제거

    if (memoText) {
      // 입력값이 비어 있지 않다면
      createMemo(memoText); // 메모 생성 함수 호출
      memoInput.value = ""; // 입력 필드 초기화
    }
  });
});
