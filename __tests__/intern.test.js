const Intern = require('../lib/intern');

describe("Intern class", () => {
	it("it should create an object with intern value pairs.", () => {
		// arrange
		const intern = new Intern("seth", 44, "seth@gmail.com", "DU");
		// assert
		expect(intern).toEqual({
			name: "seth",
			id: 44,
			email: "seth@gmail.com",
			school: "DU",
		})
	})
});