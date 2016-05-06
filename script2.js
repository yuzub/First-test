"use strict"

let student = {
	name: "Vasya",
	surname: "Petrov",
	age: 30,
	courses: [{
		courseName: "HTML",
		teacher: "Ivanov",
		duration: 48,
		passed: 1,
		ratings: [4, 5, 4] 
	}, {
		courseName: "CSS",
		teacher: "Sidorov",
		duration: 48,
		passed: 1,
		ratings: [5, 4, 5, 4] 
	}, {
		courseName: "JS",
		teacher: "Smith",
		duration: 96,
		passed: 0,
		ratings: [1, 2, 3, 4, 5] 
	}, {
		courseName: "Java",
		teacher: "Smith",
		duration: 254,
		passed: 0,
		ratings: []
	}, {
		courseName: "C#",
		teacher: "Smith",
		duration: 254,
		passed: 0
	}],
	getFullName: function() {
		return this.name + " " + this.surname;
	},
	getAge: function() {
		return this.age + " years old";
	},
	getCourses: function() {
		return this.courses.reduce( (previousValue, currentItem) => 
			(previousValue === "") ? previousValue + currentItem.courseName : previousValue + ", " + currentItem.courseName
		, "");
	},
	addNewCourse: function(teacherName, course, duration_) {
		this.courses.push({
			courseName: course,
			teacher: teacherName,
			duration: duration_,
			passed: 0,
			ratings: []
		});
	},
	getAvarageMarkByCourse: function(course) {
		let avarage = 0;
		let courseObj = this.courses.filter( item => item.courseName === course );
		if (courseObj.length === 0) return null;
		if ("ratings" in courseObj[0] && courseObj[0].ratings.length !== 0) {
			return courseObj[0].ratings.reduce( 
				(previousValue, currentItem) => previousValue + currentItem, 0) / courseObj[0].ratings.length;
		}else{
			return null;
		}
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
