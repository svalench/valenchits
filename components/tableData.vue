<template>
<table class="table_blur">
    <tbody>
    <tr>
       <td>возраст</td>
       <td>31 год</td>
    </tr>
    <tr>
       <td>пол</td>
       <td>мужской</td>
    </tr>
    <tr>
       <td>семейное положение</td>
       <td>женат, детей нет</td>
    </tr>
    <tr>
       <td>гражданство</td>
       <td>Республика Беларусь</td>
    </tr>
    <tr>
       <td>опыт в WEB</td>
       <td>5 лет</td>
    </tr>
    <tr>
       <td>релевантный PHP опыт</td>
       <td>2 года (последний опыт разработки на php 2 года назад (php native))</td>
    </tr>
    <tr>
       <td>релевантный Python опыт</td>
       <td>3 года (python2.7, python >3.7)</td>
    </tr>
     <tr>
       <td>релевантный HTML, CSS опыт</td>
       <td>4 года (не углубленные познания)</td>
    </tr>
    <tr>
       <td>релевантный JS опыт</td>
       <td>4 года</td>
    </tr>
 </tbody></table>
</template>

<script>
export default {
  name: "tableData"
}
</script>

<style scoped>

.table_blur {
  color: #2b2b2b;
   background: #8ca0a0;
   border-collapse: collapse;
   text-align: left;
  width: 100%;
}

.table_blur th {
   border-top: 1px solid #777777;
   border-bottom: 1px solid #777777;
   box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
   background: linear-gradient(#1a3131, #1a3131);
   color: white;
   position: relative;
}

.table_blur th:after {
   content: "";
   display: block;
   position: absolute;
   left: 0;
   top: 25%;
   height: 25%;
   width: 100%;
   background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .08));
}

.table_blur tr:nth-child(odd) {
   background: #ebf3f9;
}

.table_blur th:first-child {
   /*border-left: 1px solid #777777;*/
   /*border-bottom: 1px solid #777777;*/
   box-shadow: inset 1px 1px 0 #999999, inset 0 -1px 0 #999999;
}

.table_blur th:last-child {
   /*border-right: 1px solid #777777;*/
   /*border-bottom: 1px solid #777777;*/
   box-shadow: inset -1px 1px 0 #999999, inset 0 -1px 0 #999999;
}

.table_blur td {
   border: 1px solid #e3eef7;
   padding: 10px 15px;
   position: relative;
   transition: all 0.5s ease;
}

.table_blur tbody:hover td {
   color: transparent;
   text-shadow: 0 0 3px #a09f9d;
}

.table_blur tbody:hover tr:hover td {
   color: #444444;
   text-shadow: none;
}
</style>
