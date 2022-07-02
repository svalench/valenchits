<template>
<div class="index-page">
  <div class="hello">
<b-embed
    type="video"
    aspect="16by9"
    allowfullscreen
    autoplay  muted loop
     allow="autoplay; fullscreen"
  >
  <source  :src="require('~/assets/video/neiro.mp4')" type="video/mp4">
</b-embed>
  <div class="content "><div class="content-text align-middle">
    {{$t('aboutMe.p')}}<br>
    {{$t('aboutMe.w')}}<br>
    {{$t('aboutMe.a')}}<br>
    {{$t('aboutMe.first_name')}} {{$t('aboutMe.last_name')}}<br>
  </div></div>
  </div>
  <about-me id="about"></about-me>
  <careara id="careara"></careara>
  <technologies id="tech"></technologies>
</div>
</template>

<script>
import Careara from "../components/index/careara";
import AboutMe from "../components/index/aboutMe";
import Technologies from "../components/index/technologies";
export default {
  name: 'IndexPage',
  components: {Technologies, AboutMe, Careara},
}
</script>
<style>
.index-page{
  min-height: 200vh;

}
.hello{
  position:relative;
  text-align: center;

}
.content {
  position: absolute;
  height: 100%;
  top: 0;
  backdrop-filter: blur(3px);

  background: rgba(0, 0, 0, 0.27);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
</style>
