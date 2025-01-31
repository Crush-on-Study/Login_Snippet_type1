document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("LoginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("userpw");
    const submitButton = loginForm.querySelector("button[type='submit']");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("CloseModal");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // 이메일과 비밀번호가 입력되었으면 로그인 성공
        if (username && password) {
            window.location.href = "loading.html"; // 로그인 성공 시 로딩 화면으로 이동
        } else {
            alert("이메일과 비밀번호를 입력하세요.");
        }
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    }
});
