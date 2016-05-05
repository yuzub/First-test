"use strict"

let obj = {
  num: 1.24,
  str: "not very long string",
  f() {
    return this.str.split(" ")
  },
  arr: ["some", "array", {someProp: "value"}],
  prop: { key: 1 },
  empty: null,
  last: 0,
  num1: 75.757575,
  str1: "Lorem ipsum dolor sit amet.",
  num2: 123.987654321
};
let objRes = {};

// Задание 1
function dz1obj(ob) {
	let objResult = {};
	
	// Добавление свойств в новый объект
	objResult.propNames = Object.keys(ob);
	objResult["количество собственных свойств"] = objResult.propNames.length;
	objResult.propTypes = [];
	
	// Модификация исходного объекта (работа по ссылке)
	for (let prop in ob) {
		let type = typeof obj[prop]
		objResult.propTypes.push(type);
		if (type === "number") {
			obj[prop] = +obj[prop].toFixed(2);
		}
		if (type === "string") {
			obj[prop] = obj[prop].toUpperCase();
		}
	}
	Object.preventExtensions(ob);

	return objResult;
}

// Обработчики наведения и нажатия на кнопку ДЗ 1
function showObject() {
	document.getElementById("obj").innerHTML = printObj(obj);
};

function runDZ1() {
	objRes = dz1obj(obj);
	let tds = document.getElementsByTagName("td");	
	tds[1].innerHTML = printObj(obj);
	tds[2].innerHTML = printObj(objRes);
}	
// Вспомогательная функция для вывода объектов на страницу
function printObj(o) {
	let objToStr = "";
	for (let prop in o) {
		objToStr += prop + ": " + o[prop] + "<br/>";
	}
	return objToStr;
}