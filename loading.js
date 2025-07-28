// loading.js
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // 로딩 화면 숨김
    document.getElementById('loader').classList.add('hide');

    // ✅ GNB 등장 애니메이션 트리거
    document.querySelector('.gnb').classList.add('show');
  }, 2500);
});
