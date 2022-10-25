const Employee = require('../lib/employee');

describe("Employee class", () => {
	it("it should create an object with employee value pairs.", () => {
		const employee = new Employee("tom", 27, "tom@gmail.com");
		expect(employee).toEqual({
			name: "tom",
			id: 27,
			email: "tom@gmail.com",
		})
	})
});

describe("getEmail ()", () => {
	it("it should return employees email.", () => {
		const employee = new Employee("tom", 27, "tom@gmail.com");
	})
});
