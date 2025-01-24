document.addEventListener("DOMContentLoaded", () => {
    const signUpLink = document.getElementById("SignUpLink");
    const signUpModal = document.getElementById("SignUpModal");
    const closeSignUpModalBtn = document.getElementById("CloseSignUpModal");

    // 회원가입 모달 열기
    signUpLink.addEventListener("click", (e) => {
        e.preventDefault();
        signUpModal.classList.add("show");
    });

    // 회원가입 모달 닫기
    closeSignUpModalBtn.addEventListener("click", () => {
        signUpModal.classList.remove("show");
    });
});
