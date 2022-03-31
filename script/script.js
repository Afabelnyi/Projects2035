const contentCards = document.querySelector('.content_cards')
const btn = document.querySelector('.btn')
const wordInput = document.querySelector('.word')
const translateInput = document.querySelector('.translate')
const colorInput = document.querySelector('.color')
const searchElem = document.querySelector('.searchElem')
let translateArr = []
let wordsArr = []

btn.addEventListener('click', () => {
	const container = document.createElement('div');
	container.classList.add('container')

	let card = document.createElement('div');
	const closeX = document.createElement('div')
	closeX.innerText = 'X'
	closeX.classList.add('close')
	card.classList.add('card')
	card.style.backgroundColor = colorInput.value
	card.innerText = wordInput.value;
	card.append(closeX)

	let cardEn = document.createElement('div');
	cardEn.classList.add('card', 'cardEn')
	const closeX2 = document.createElement('div')
	closeX2.innerText = '[]'
	closeX2.classList.add('close')
	cardEn.innerText = translateInput.value;
	cardEn.style.backgroundColor = colorInput.value
	cardEn.append(closeX2)

	container.append(card, cardEn)
	contentCards.append(container);



	wordsArr.push(wordInput.value)
	translateArr.push(translateInput.value)
	console.log(wordsArr);
	console.log(translateArr);


	wordInput.value = ''
	translateInput.value = ''
	colorInput.value = ''

	//ТУТ НЕ ПОЛУЧИЛОСЬ СДЕЛАТЬ, ЧТОБЫ ПРИ КЛИКЕ В КАРТОЧКЕ СЛОВО БРАЛОСЬ С МАССИВА И МЕНЯЛОСЬ С РУССКОГО НА АНГЛИЙСКОЕ. КАК СДЕЛАТЬ ПОМОЖЕТЕ? ГОЛОВУ СЛОМАЛ РЕШИЛ ПО-ДРУГОМУ.
	// 	function indexElem(target) {//передаем блок куда кликнули возвращаем индекс блока
	// 		let numberOfBlock
	// 		const children = target.parentNode.children
	// 		for (let i = 0; i < children.length; i++) {
	// 			if (target === children[i]) {
	// 				numberOfBlock = i
	// 				break
	// 			}
	// 		}

	// 		return (numberOfBlock)
	// 	}


	// 	card.addEventListener('click', e => {
	// 		let targetElem = e.target//блок на который клик
	// 		const indexEl = indexElem(targetElem)//сюда функция должна вернуть индекс блока, на который нажали
	// 		console.log(indexEl);
	// 		console.log(targetElem);
	// 		// console.log(wordsArr);
	// 		console.log('eerrererer ', wordsArr.indexOf(targetElem.innerText));
	// 		if (indexEl === wordsArr.indexOf(targetElem.innerText)) {//если = то открыто русское слово
	// 			targetElem.innerText = ''
	// 			targetElem.innerText = translateArr[indexEl]
	// 		} else if (indexEl === translateArr.indexOf(targetElem.innerText)) {
	// 			targetElem.innerText = ''
	// 			targetElem.innerText = wordsArr[indexEl]
	// 		}
	// 	})


	// const close = [...document.querySelectorAll('close')];
	closeX.addEventListener('click', () => {
		container.remove()
	})
	closeX2.addEventListener('click', () => {
		container.remove()
	})

	container.addEventListener('click', () => {
		const hideClass = cardEn.classList;
		hideClass.toggle('hide')
	})
})

searchElem.addEventListener("keyup", () => {
	const allChild = contentCards.children;//здесь хранятся все дивы
	let numberI
	for (let i = 0; i < allChild.length; i++) {
		if (searchElem.value === '') {
			for (let k = 0; k < allChild.length; k++) {
				const element = allChild[k];
				element.style.display = "flex";
			}
		}
		else if (searchElem.value === wordsArr[i]) {
			for (let k = 0; k < allChild.length; k++) {
				const element = allChild[k];
				element.style.display = "none";
			}
			numberI = i
			let childElem = allChild[numberI];
			childElem.style.display = 'flex'
			break
		}
		// console.log(searchElem.value);
		// console.log(wordsArr[i]);
		// console.log(allChild[numberI]);


	}
})