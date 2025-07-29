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

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // 로딩 애니메이션 사라짐
  loader.classList.add('hide');

  // GNB 및 기타 요소 순차 등장
  setTimeout(() => {
    // GNB (insert된 뒤 show 클래스 붙이기)
    const gnb = document.querySelector('.gnb');
    if (gnb) gnb.classList.add('show');

    // GNB 컨테이너 애니메이션
    const gnbContainer = document.getElementById('gnb-container');
    if (gnbContainer) gnbContainer.classList.add('show');

    // 나머지 fade-up 요소들 순차 등장
    document.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('show');
      }, 300 + i * 150); // 0.15초 간격으로 슉슉
    });
  }, 700); // 로딩 hide되고 나서 약간 딜레이 후 실행
});
