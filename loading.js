// loading.js
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // 로딩 화면 숨김
    document.getElementById('loader').classList.add('hide');

    // ✅ GNB 등장 애니메이션 트리거
    document.querySelector('.gnb').classList.add('show');
  }, 2500);
});

// 선택된 메뉴만 underline 유지하는 JS (loading.js나 따로 파일에 추가)
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
