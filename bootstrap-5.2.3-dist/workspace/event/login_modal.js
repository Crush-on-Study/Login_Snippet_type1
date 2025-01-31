document.addEventListener("DOMContentLoaded", () => {
    const signUpLink = document.getElementById("SignUpLink");
    const signUpModal = document.getElementById("SignUpModal");
    const closeSignUpModalBtn = document.getElementById("CloseSignUpModal");
    const signUpForm = document.getElementById("SignUpForm");
    const emailInput = document.getElementById("signup-username");
    const passwordInput = document.getElementById("signup-password");

    // 이메일 검증 정규식
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // 비밀번호 강도 검사
    function checkPasswordStrength(password) {
        let strength = "위험"; // 기본값
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length >= 8 && hasLetters && hasNumbers && hasSpecial) {
            strength = "강력";
        } else if (password.length >= 6 && hasLetters && (hasNumbers || hasSpecial)) {
            strength = "안전";
        } else if (password.length >= 4) {
            strength = "보통";
        }

        return strength;
    }

    // 비밀번호 강도 표시
    const strengthDisplay = document.createElement("p");
    strengthDisplay.style.color = "#ffffff";
    strengthDisplay.style.marginTop = "5px";
    passwordInput.parentNode.appendChild(strengthDisplay);

    passwordInput.addEventListener("input", () => {
        const strength = checkPasswordStrength(passwordInput.value);
        strengthDisplay.textContent = `비밀번호 강도: ${strength}`;
    });

    // 회원가입 모달 열기
    signUpLink.addEventListener("click", (e) => {
        e.preventDefault();
        signUpModal.classList.add("show");
    });

    // 회원가입 모달 닫기
    closeSignUpModalBtn.addEventListener("click", () => {
        signUpModal.classList.remove("show");
    });

    // 회원가입 폼 제출 시 이메일 검증 실행
    signUpForm.addEventListener("submit", (e) => {
        if (!isValidEmail(emailInput.value)) {
            alert("올바른 이메일 주소를 입력하세요.");
            e.preventDefault();
        }
    });
});
