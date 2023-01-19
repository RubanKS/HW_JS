// 1
// Необходимо с помощью цикла for вывести следующие 
//11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

console.log('Задание №1');
for (let i = 0; i <= 10; i++) {
	if (i === 0) {
		console.log(`${i} - это ноль`);
	} else if (i % 2 == 0) {
		console.log(`${i} - четное число`);
	} else {
		console.log(`${i} - нечетное число`);
	}
}

// 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

console.log('\nЗадание №2');
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// 3
// Используя Math.random() вам необходимо генерировать цифры
//от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

console.log('\nЗадание №3');
// arrRandom.push(randomNums(10));
// function randomNums() {
// 	return Math.floor(Math.random() * 10);
// }

const arrRandom = [];
let summ = 0;
let three = 0;
for (let i = 0; i < 5; i++) {
	arrRandom[i] = Math.floor(Math.random() * 10);
	summ = summ + arrRandom[i];
	if (arrRandom[i] === 3) {
		three++;
	}
}
console.log(`Массив [${arrRandom}]`);
console.log(`Сумма чисел: ${summ}`);
console.log(`Минимальное число: ${Math.min(...arrRandom)}`);
console.log(`В массие есть число 3 в количестве: ${three}`);

// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for),
// как показано на рисунке, только у вашей горки должно
// быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

console.log('\nНеобязятельное задание');
let result = 'x';
console.log(result);
for (let i = 2; i <= 20; i++) {
	result = result + 'x';
	console.log(result);
}
