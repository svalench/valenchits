<template>
  <div>
    <head_site></head_site>
    <Nuxt />
  </div>
</template>

<script>
import Head_site from "../components/head_site";
export default {
  name: "default",
  components:{
    Head_site
  },
  data(){
    return{
        loading:true,
    }
  },
  async fetch() {

  },
  mounted() {
     setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  head() {

    },

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background:
    radial-gradient(circle farthest-corner at 90vw -20vh, rgba(14, 158, 156, 0.28), rgba(24, 26, 26, 0.95)),
    radial-gradient(circle  at -20vw 200vh, rgba(14, 158, 156, 0.25), rgba(24, 26, 26, 0.95) 5%);
  min-height: 100vh;
}
</style>
