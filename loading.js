document.addEventListener('DOMContentLoaded', () => {
  // 로딩 끝나면 GNB 등장
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    document.querySelector('.gnb').classList.add('show');
  }, 2500);

  // ✅ GNB 메뉴 클릭 시 active 클래스 토글
  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // prevent default scroll only if needed
      // e.preventDefault(); ← 이건 필요 시 사용

      // 모든 메뉴에서 active 제거
      menuLinks.forEach(el => el.classList.remove('active'));

      // 클릭한 항목에 active 추가
      link.classList.add('active');
    });
  });
});
