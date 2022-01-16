<template>
<div class="index-page">
  <div class="hello">
<b-embed  id="about"
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
<!--    <b-button> {{$t('more')}}-->
<!--    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 19 19">-->
<!--  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>-->
<!--  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>-->
<!--</svg>-->
<!--    </b-button>-->
  </div></div>
  </div>
  <careara id="careara"></careara>
</div>
</template>

<script>
import Careara from "../components/index/careara";
export default {
  name: 'IndexPage',
  components: {Careara},
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
.content-text{
  margin-top: 13%;
  font-weight: 650;
  font-size: 30px;
}
</style>
