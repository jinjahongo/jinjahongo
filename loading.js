document.addEventListener('DOMContentLoaded', () => {
  // 로딩 끝나면 GNB 보이게 하기
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    document.querySelector('.gnb').classList.add('show');
  }, 2500);

  // ✅ GNB 메뉴 클릭하면 밑줄 유지되도록 하기
  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // 기존에 붙은 active 클래스들 제거
      menuLinks.forEach(el => el.classList.remove('active'));
      // 클릭한 메뉴에 active 클래스 추가
      link.classList.add('active');
    });
  });
});
