document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const progressBar = document.querySelector(".progress");

    // Progress Bar 애니메이션 시작
    setTimeout(() => {
        progressBar.style.width = "100%";
    }, 100);

    // 로딩 메시지 변경
    const messages = [
        "메인 홈페이지 뚝딱 뚝딱...",
        "손님 맞이를 위한 장식 중...",
        "입장하세요!"
    ];
    let index = 0;

    setInterval(() => {
        if (index < messages.length) {
            loadingText.textContent = messages[index];
            index++;
        }
    }, 1000);

    // 4초 후 main.html로 이동
    setTimeout(() => {
        window.location.href = "main.html";
    }, 4000);
});
