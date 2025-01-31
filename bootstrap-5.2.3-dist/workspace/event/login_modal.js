document.addEventListener("DOMContentLoaded", () => {
    const signUpLink = document.getElementById("SignUpLink");
    const signUpModal = document.getElementById("SignUpModal");
    const closeSignUpModalBtn = document.getElementById("CloseSignUpModal");
    const signUpForm = document.getElementById("SignUpForm");
    const emailInput = document.getElementById("signup-email");
    const passwordInput = document.getElementById("signup-password");
    const passwordConfirmInput = document.getElementById("signup-password-confirm");
    const phoneInput = document.getElementById("signup-phone");
    const birthInput = document.getElementById("signup-birth");
    const termsCheckbox = document.getElementById("signup-terms");

    // ✅ 모달창 기본적으로 숨김 처리
    signUpModal.classList.add("hidden");

    // 회원가입 모달 열기
    signUpLink.addEventListener("click", (e) => {
        e.preventDefault();
        signUpModal.classList.add("show");
        signUpModal.classList.remove("hidden");
    });

    // 회원가입 모달 닫기
    closeSignUpModalBtn.addEventListener("click", () => {
        signUpModal.classList.remove("show");
        signUpModal.classList.add("hidden");
    });

    // 이메일 검증 정규식
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // 비밀번호 강도 검사
    function checkPasswordStrength(password) {
        let strength = "위험";
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

    // 회원가입 폼 제출 시 유효성 검사
    signUpForm.addEventListener("submit", (e) => {
        if (!isValidEmail(emailInput.value)) {
            alert("올바른 이메일 주소를 입력하세요.");
            e.preventDefault();
            return;
        }

        if (passwordInput.value !== passwordConfirmInput.value) {
            alert("비밀번호가 일치하지 않습니다.");
            e.preventDefault();
            return;
        }

        if (!phoneInput.value.match(/^\d{10,11}$/)) {
            alert("올바른 전화번호를 입력하세요.");
            e.preventDefault();
            return;
        }

        if (!birthInput.value) {
            alert("생년월일을 입력하세요.");
            e.preventDefault();
            return;
        }

        if (!termsCheckbox.checked) {
            alert("약관에 동의해야 회원가입이 가능합니다.");
            e.preventDefault();
            return;
        }

        alert("회원가입 성공!");
    });
});
