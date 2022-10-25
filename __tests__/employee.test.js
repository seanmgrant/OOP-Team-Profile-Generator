const Employee = require('../lib/employee');



describe("Employee class", () => {
	it("it should create an object with employee value pairs.", () => {
		// arrange
		const employee = new Employee("tom", 27, "tom@gmail.com");
		// assert
		expect(employee).toEqual({
			name: "tom",
			id: 27,
			email: "tom@gmail.com",
		})
	})
});

describe("getEmail ()", () => {
	it("it should return employees email.", () => {
		// arrange
		const employee = new Employee("tom", 27, "tom@gmail.com");
		// assert
		// expect(employee.getEmail()).toEqual(
		// `<a href="mailto:matt@gmail.com">matt@gmail.com</a>`
		// )
	})
});
