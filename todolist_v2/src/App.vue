<template>
  <div>
    <header id="home">
      <img src="./assets/logo.jpg" alt="">
      <div id="container">
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,
body,
header,
main {
  height: 50vh;
}

ul {
  list-style-type: none;
}

header {
  background: -webkit-linear-gradient(top, #fff, grey);
  background: linear-gradient(top left, #fff, grey);
}

.scroll {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 0;
  width: 0;
  border-left: 90px solid transparent;
  border-right: 90px solid transparent;
  border-bottom: 80px solid white;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.scroll:before {
  content: '';
  position: absolute;
  top: 45px;
  left: 50%;
  height: 20px;
  width: 30px;
  margin-top: -5px;
  margin-left: -15px;
  background: -webkit-linear-gradient(top left, #e84c00, #c10040);
  background: linear-gradient(top left, #e84c00, #c10040);
  -webkit-clip-path: polygon(15% 0, 50% 60%, 85% 0, 100% 20%, 50% 100%, 0 20%);
  clip-path: polygon(15% 0, 50% 60%, 85% 0, 100% 20%, 50% 100%, 0 20%);
  -webkit-animation: bounce 2s ease infinite;
  animation: bounce 2s ease infinite;
}

header img {
  margin-top: 10%;
}

@-webkit-keyframes bounce {
  50% {
    -webkit-transform: scale(0.75) translateY(-50%);
    transform: scale(0.75) translateY(-50%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes bounce {
  50% {
    -webkit-transform: scale(0.75) translateY(-50%);
    transform: scale(0.75) translateY(-50%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

a {
  text-decoration: none;
}

/* This class is added on scroll */
.fixed {
  position: fixed;
  top: 0;
  height: 70px;
  z-index: 1;
}

body {
  color: #fff;
  font-family: 'open-sans-bold', AvenirNext-Medium, sans-serif;
  font-size: 18px;
  text-align: center;
}

/* Navigation Settings */
#screen1 {
  background: #43b29d;
  height: 100%;
}

#screen1 p {
  padding-top: 100%;
}

#container {
  position: absolute;
  top: 65%;
  left: 48%;
}

#input {
  position: relative;
  margin-top: -20px;
  margin-left: -120px;
}
</style>
