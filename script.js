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
  num1: 75.757575
};

function dz1() {
	let pRes1 = document.getElementById("res1");
	console.log(obj);
	let obj2 = dz1obj(obj);
	for (let prop in obj2) {
		console.log(obj2[prop]);
		pRes1.innerHTML += "<br/>" + obj2[prop];
	};
	console.log(obj);
	pRes1.innerHTML += "<br/>" + obj;
	}

function dz1obj(ob) {
	let objResult = {};

	let objKeys = Object.keys(ob);
	objResult["количество собственных свойств"] = objKeys.length;
	objResult.propTypes = [];
	objResult.propNames = objKeys;
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
	return objResult;
}