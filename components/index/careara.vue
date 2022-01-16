<template>
<div style="min-height: 100vh; padding-top: 5vh;">

<div class="container mt-5 mb-5">
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<h4>Карьера</h4>
			<ul class="timeline">
				<li>
					<a target="_blank" href="#">Университет</a>
					<a href="#" class="float-right">1 сентября, 2009 - 14 июня 2014</a>
					<p>
            Поступление в БГТУ (Белорусский Технологический Университет) на кафедру АТПиП по профессии Инженер по автоматизации
            технологических процессов и производств.
          </p>
				</li>


        <li>
					<a target="_blank" href="#">ОАО "Белшина"</a>
					<a href="#" class="float-right">1 августа, 2014 - 30 августа, 2018</a>
					<p>
            Отработка по распределению в качестве инженера-электроника в цехе КИПиА участка ЗМШ
          </p>
				</li>
			</ul>
		</div>

	</div>
</div>
</div>
</template>

<script>
export default {
  name: "careara"
}
</script>

<style scoped>
*{
  color: #d4d9df;
}
ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #22c0e8;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>
