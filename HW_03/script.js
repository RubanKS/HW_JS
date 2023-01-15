console.log('Задача 1');
const numCub = () => 2 ** 3 + 3 ** 3;
console.log(numCub());

console.log('\nЗадача 2');
let n = prompt('Введите число n', '');
const percSalary = () => n * 0.87;
console.log(isNaN(n) || n === '' || n === null ? 'Значение задано неверно' :
	`Размер заработной платы за вычетом налогов равен ${percSalary()}`);

console.log('\nЗадача 3');
let nn = Number(prompt('Введите первое число'));
let mm = Number(prompt('Введите второе число'));
let zz = Number(prompt('Введите третье число'));
function numMax() {
	let max;
	if (nn > mm && nn > zz) {
		max = nn;
	} else if (mm > nn && mm > zz) {
		max = mm;
	}
	else {
		max = zz;
	}
	return max;
}
console.log(`Максимальное значение: ${numMax()}`);

console.log('\nЗадача 4');
let nnn = Number(prompt('Введите первое число'));
let mmm = Number(prompt('Введите второе число'));

function summ(n, m) {
	return n + m;
}
console.log(summ(nnn, mmm));

function diff(n, m) {
	return n > m ? result = n - m : result = m - n;
}
console.log(diff(nnn, mmm));

function mult(n, m) {
	return n * m;
}
console.log(mult(nnn, mmm));

function div(n, m) {
	return n / m;
}
console.log(div(nnn, mmm));