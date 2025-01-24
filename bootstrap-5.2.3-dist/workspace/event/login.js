document.addEventListener("DOMContentLoaded", () => {
    const signInBtn = document.getElementById("SignInBtn");
    const signUpBtn = document.getElementById("SignUpBtn");
    const loginForm = document.getElementById("LoginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("userpw");
    const submitButton = loginForm.querySelector("button[type='submit']");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("CloseModal");

    const validCredentials = {
        username: "admin",
        password: "admin",
    };

    signInBtn.addEventListener("click", () => {
        console.log("Sign-In 버튼 클릭됨!"); // 디버깅용 로그
        signInBtn.classList.add("hidden");
        signUpBtn.classList.add("hidden");
        usernameInput.classList.remove("hidden"); // hidden 제거

        // 지연 후 show 추가
        setTimeout(() => {
            usernameInput.classList.add("show");
        }, 200);
    });

    usernameInput.addEventListener("input", () => {
        if (usernameInput.value.trim()) {
            passwordInput.classList.remove("hidden");
            setTimeout(() => {
                passwordInput.classList.add("show");
            }, 200);
        }
    });

    passwordInput.addEventListener("input", () => {
        if (passwordInput.value.trim()) {
            submitButton.classList.remove("hidden");
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === validCredentials.username && password === validCredentials.password) {
            alert("Login Successful");
        } else {
            modal.classList.add("show");
        }
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });
});
