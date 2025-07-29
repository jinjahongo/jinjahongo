document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const gnb = document.querySelector('.gnb');
  const gnbContainer = document.getElementById('gnb-container');
  const menuLinks = document.querySelectorAll('.menu a');

  // ✅ 로딩 텍스트 애니메이션이 끝난 후 GNB 및 콘텐츠 등장
  const TEXT_ANIMATION_DURATION = 3000;

  setTimeout(() => {
    // 1. 로딩 화면 숨김
    loader.classList.add('hide');

    // 2. GNB 등장
    if (gnb) gnb.classList.add('show');
    if (gnbContainer) gnbContainer.classList.add('show');

    // 3. fade-up 요소 순차 등장
    document.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('show');
      }, i * 150); // 0.15초 간격
    });
  }, TEXT_ANIMATION_DURATION);

  // ✅ 메뉴 클릭 시 밑줄 유지
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
