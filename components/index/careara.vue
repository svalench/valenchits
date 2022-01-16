<template>
<div style="min-height: 100vh; padding-top: 7vh; padding-bottom: 5vh;">


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
            Отработка по распределению в качестве инженера-электроника в цехе КИПиА участка ЗМШ. Программирование ПЛК
            и панелей оператора фирм Siemens, ОВЕН. Обслуживание ПК и промышленных компьютеров.
          </p>
				</li>

         <li>
					<a target="_blank" href="#">ООО "АСТ Эксперт"</a>
					<a href="#" class="float-right">3 сентября, 2018 - ноябрь, 2019</a>
					<p>
           Инженер по автоматизации. Программирование ПЛК (языки программирования стандарта мэк 61131-3)
            и панелей оператора фирм Siemens, ОВЕН, Schneider Electric и пр. Настройка приводов.
            Обслуживание ПК и промышленных компьютеров.
            Программирование WEB интерфейсов для систем управления цехами и
            распределенным технологическим оборудованием (PHP7, Jquery, JS, HTML, Apache WS). Настройка серверов.
          </p>
				</li>

        <li>
					<a target="_blank" href="#">ООО "МВЛАБ"</a>
					<a href="#" class="float-right">ноябрь, 2019 - 30 апреля, 2021</a>
					<p>
           Инженер программист. Программирование ПЛК (языки программирования стандарта мэк 61131-3) и панелей
            оператора фирм Siemens, ОВЕН, Schneider Electric и пр. Настройка приводов.
            Программирование WEB интерфейсов для систем управления (PHP7, Jquery, JS, HTML, Apache WS). Настройка серверов.
            Разработка систем мониторинга и сбора данных с различных систем, построение архитектуры приложений (монолит и сервисы),
            Code review, управление командой разработчиков.
            (Python3, HTML, JS, JQ, Vue Nuxt.js, Django, DRF, FastAPI, PostgreSQL, MySQL, Linux, Nginx,Docker docker-compose)
          </p>
				</li>

         <li>
					<a target="_blank" href="#">ООО "АлюсофтБел"</a>
					<a href="#" class="float-right">3 мая, 2021 - настоящее время</a>
					<p>
           Программист. Разработка интернет сервисов для заказчика (ГК Алютех).
            (Python2, Python3, HTML, JS, JQ, Vue Nuxt.js, Django, FastAPI, PostgreSQL, MySQL, Linux, DRF, Redis, Nginx,
            Kubernetes, Docker, Grafana, Kibana)
          </p>
				</li>

         <li>
					<a target="_blank" href="#">Фриланс</a>
					<a href="#" class="float-right">май, 2015 - настоящее время</a>
					<p>
            Разработка WEB сайтов и различных систем, таких как bigbel.by, vseti-goroda.ru,
             и др. <a href="#" style="color: brown;">Подробнее</a>
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
