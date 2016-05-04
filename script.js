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
  last: 0
};

console.log(obj);
let obj2 = dz1obj(obj);
for (let prop in obj2) {
	console.log(obj2[prop]);
};

function dz1obj(ob) {
	let objResult = {};

	let objKeys = Object.keys(ob);
	objResult["количество собственных свойств"] = objKeys.length;
	// objResult.propTypes = ;
	objResult.propNames = objKeys;
	
	return objResult;
}