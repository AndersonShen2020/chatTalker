const plan = [
    {
      member: "10000",
      basic: 600,
      standard: 1600
    },
    {
      member: "15000",
      basic: 500,
      standard: 1500
    },
    {
      member: "20000",
      basic: 400,
      standard: 1400
    },
    {
      member: "25000",
      basic: 300,
      standard: 1300
    },
    {
      member: ">25000",
      basic: 100,
      standard: 1200
    }
  ];

function changePrice(e) {
  // 找出所有有 price-plan-btn 這個 class 的元件
  const btnActive = document.getElementsByClassName('price-plan-btn')
  // 將所有元件設定成未啟動的樣式
  for (let i = 0; i <= 4; i++) { 
    btnActive[i].classList.remove('price-plan-btn-active');
  }
  // 將點擊的元件設定 price-plan-btn-active
  e.classList.toggle('price-plan-btn-active');

  const member = document.getElementsByClassName('member');
  const basic = document.getElementsByClassName('basic');
  const standard = document.getElementsByClassName('standard');

  member[0].textContent = plan[e.dataset.num].member;
  member[1].textContent = plan[e.dataset.num].member;
  basic[0].textContent = plan[e.dataset.num].basic;
  standard[0].textContent = plan[e.dataset.num].standard;
 }