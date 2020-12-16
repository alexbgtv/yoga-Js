window.addEventListener('DOMContentLoaded', function(){


	// tabs

	let tabs = document.querySelector('.info-header'),
		tab = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent')

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show')
			tabContent[i].classList.add('hide')
		}
	}
	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide')
			tabContent[b].classList.add('show')
		}
	}
	
	tabs.addEventListener('click', (event) => {
		let target = event.target
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0)
					showTabContent(i)
					break
				}
			}
		}
	})


	// timer
	
	/*
	Что необходимо: 
	 1. Дедлайн
	 2. Сколько времени осталось
	 3. Статичную верстку превратить в интерактивную
	 4. функция которая обновляет эти данные на странице
	 */
	
	
	let deadline = '2020-12-31'

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/1000/60/60) % 24),
		days = Math.floor((t/1000/60/60/24))

		return {
			'total'		: t,
			'days'		: days,
			'hours'		: hours,
			'minutes'	: minutes,
			'seconds'	: seconds
		}
	}

	getTimeRemaining(deadline)


	function setClock(id, endtime) {
		let timer = document.getElementById(id),
		days = timer.querySelector('.days'),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1000)

		function updateClock() {
			let t = getTimeRemaining(endtime)
			days.textContent = t.days
			hours.textContent = t.hours
			minutes.textContent = t.minutes
			seconds.textContent = t.seconds

			if(endtime <= 0) {
				clearInterval(timeInterval)
			}
		}
	}
	
	setClock('timer', deadline)


	// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		info = document.querySelector('.info'),
		descriptionBtn = document.querySelectorAll('.description-btn')

	more.addEventListener('click', () => {
		overlayShoe()
	})

	info.addEventListener('click', (event)=> {
		let target = event.target
		for (let i = 0; i < descriptionBtn.length; i++) {
			if(target == descriptionBtn[i]){
				overlayShoe()
			}
		}
	})

	close.addEventListener('click', () => {
		overlayHide()
	})

	function overlayShoe() {
		overlay.style.display = 'block'
		document.body.style.overflow = 'hidden'
	}

	function overlayHide() {
		overlay.style.display = 'none'
		document.body.style.overflow = ''
	}
})

