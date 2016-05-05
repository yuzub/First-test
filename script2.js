"use strict"

let student = {
	name: "Vasya",
	surname: "Petrov",
	age: 30,
	courses: [{
		nm: "HTML",
		teacher: "Ivanov",
		duration: 48,
		passed: 1,
		ratings: [4, 5, 4] 
	}, {
		nm: "CSS",
		teacher: "Sidorov",
		duration: 48,
		passed: 1,
		ratings: [5, 4, 5, 4] 
	}, {
		nm: "JS",
		teacher: "Smith",
		duration: 96,
		passed: 0,
		ratings: [1, 2, 3, 4, 5] 
	}],
	getFullName: function() {
		return this.name + " " + this.surname;
	},
	getAge: function() {
		return this.age + " years old";
	},
	getCourses: function() {

	},
	addNewCourse: function() {

	},
	getAvarageMarkByCourse: function() {

	},
	getAvarageMark: function() {

	},
	addMark: function() {

	},
	addProgress: function() {

	},
	getProgress: function() {

	}
};
