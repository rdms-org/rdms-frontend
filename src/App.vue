<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'NanumSquareRound';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body .btn-outline-violet {
  --bs-btn-color: #822DE2;
  --bs-btn-border-color: #822DE2;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #822DE2;
  --bs-btn-hover-border-color: #822DE2;
  --bs-btn-focus-shadow-rgb: 13, 110, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #822DE2;
  --bs-btn-active-border-color: #822DE2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #822DE2;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #822DE2;
  --bs-gradient: none;
}

body .btn-violet {
  --bs-btn-color: #fff;
  --bs-btn-bg: #822DE2;
  --bs-btn-border-color: #822DE2;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #822DE2;
  --bs-btn-hover-border-color: #822DE2;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #822DE2;
  --bs-btn-active-border-color: #822DE2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #822DE2;
  --bs-btn-disabled-border-color: #822DE2;
}

body * {
  font-family: 'Pretendard-Regular';
}
</style>
