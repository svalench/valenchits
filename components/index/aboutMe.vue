<template>
<div class="container-fluid p-5">
  <b-row>
    <b-col cols="3">
      <b-img fluid class="myimg"  :src="require('~/assets/img/my.png')"></b-img>
       <table-data></table-data>
    </b-col>
    <b-col class="about-me-text">
      <text-block>
        <template #title>
          Привествие
        </template>
        <template #text>
           <p>Приветствую на своей маленькой странице в сети.</p>
          <p>Здесь ты расположено мое CV в виде небольшого single-page приложения. Ниже ты можешь подробнее прочитать обо мне
          и моих компетенциях в IT  не только.</p>
        </template>
      </text-block>

      <text-block>
        <template #title>
          {{$t('about')}}
        </template>
        <template #text>
         <p>
           Меня зовут Валенчиц Александр Александрович, родился я в 1991 году
              в городе <a target="_blank" href="https://www.google.com/maps/@53.1473581,29.2036295,11.91z">Бобруйске</a>
              (Республика Беларусь, Могилевская обл.). Среднее образование получил в школах №3 и №1 (с 9 класса (класс с мат. уклоном и информатикой)).
           Мне всегда нравились компьютеры и всякая электронная техника.
         </p>
        </template>
      </text-block>


      <text-block>
        <template #title>
          {{$t('careara')}} и образование
        </template>
        <template #text>
            <p>
              В 2009 году поступил в
              <a target="_blank" href="https://is.gd/JRh1Dy">БГТУ</a>. Закончил университет в 2014 и получил техническое
              образование по специальность "Автоматизация  технологических процессов и производств в химической промышленности".
              Дальнейший карьерный путь можно посмотреть
              <a href="#careara">здесь</a>.
            </p>
        </template>
      </text-block>
    </b-col>
  </b-row>

</div>
</template>

<script>
import tableData from "../tableData";
import TextBlock from "./textBlock";
import TableData from "../tableData";
export default {
  name: "aboutMe",
  components: {TableData, TextBlock}
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
