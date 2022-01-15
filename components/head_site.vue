<template>
<div class="start-p">
<b-row align-v="center"  class="text-center center-block head-site">
  <b-col cols="2"  class="icon-head">
    <span class="text-icon-head">Valenchits</span>
  </b-col>
  <b-col cols="1"></b-col>
  <b-col class="align-middle add_undeline " >{{$t('about')}}</b-col>
   <b-col class="align-middle add_undeline">{{$t('careara')}}</b-col>
   <b-col class="align-middle add_undeline">{{$t('portfolio')}}</b-col>
   <b-col class="align-middle add_undeline">{{$t('tech_skills')}}</b-col>
   <b-col class="align-middle">
     <b-dropdown  split-variant="outline" class="lang-switch" right size="sm" :text.sync="currLang">
       <b-dropdown-header id="dropdown-header-label">
      {{$t('choice_lang')}}
    </b-dropdown-header>
       <b-dropdown-item-button aria-describedby="dropdown-header-label" v-for="locale in availableLocales" class="item-switch-locale" :key="locale.code">
         <nuxt-link :to="switchLocalePath(locale.code)" ><div>{{ locale.name }}</div></nuxt-link>
       </b-dropdown-item-button>
     </b-dropdown>
   </b-col>
</b-row>
</div>
</template>

<script>
export default {
  name: "head_site",
  data(){
    return{

    }
  },
  computed: {
    currLang(){
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale).name
    },
  availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  }
},
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}


.start-p{
   position: sticky;
  top: 0;
  z-index: 1000;
}
.head-site{
  min-height: 50px;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
}
.icon-head{
  font-size: 23px;
  height: 100%;
  font-weight: 900;
    font-family: 'Oswald', sans-serif;
}
.text-icon-head{
  text-transform: uppercase;
  cursor: pointer;
}
.add_undeline{
  font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
  text-decoration: none;
  background:  no-repeat 0 100%;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 0% 2px;
  padding: .5%;
  transition: background-size .3s ease;
  cursor: pointer;
}

.add_undeline:hover, .add_undeline-active {
  background-size: 100% 2px;
}

.row{
  height: 100%;
}
.lang-switch{
  background-color: black;
  color: #f1f1f1;
}
.item-switch-locale{

  text-decoration: none;
}
a {
    text-decoration: none; /* Отменяем подчеркивание у ссылки */
  color: #f1f1f1;
}
</style>
