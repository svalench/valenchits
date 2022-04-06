<template>
<div class="container-fluid p-5">
  <b-row>
    <b-col cols="4">
      <b-img fluid class="myimg" :src="require('~/assets/img/my.png')"></b-img>
    </b-col>
    <b-col class="about-me-text">
     <p>Приветствую на своей маленькой странице в сети.</p>
      <p>Меня зовут Валенчиц Александр Александрович, родился я в 1991 году
      в городе Бобруйске где и получил среднее образование, после чего в 2009 году поступил в
      <a target="_blank" href="https://is.gd/JRh1Dy">БГТУ</a>. Дальнейший карьерный путь можно посмотреть
        <a href="#careara">здесь</a>.</p>

    </b-col>
  </b-row>

</div>
</template>

<script>
export default {
  name: "aboutMe"
}
</script>

<style scoped>
.about-me-text{
  color: #f1f1f1;
    text-decoration: none;
    padding: 40px 0 0 40px;
    font-size: 17px;
    line-height: 1.8;
  text-decoration: none;
}
.myimg{
  max-width: 100%;
    height: auto;
    object-fit: none;
    border-radius: 16px;
}
</style>
