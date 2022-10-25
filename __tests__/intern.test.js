const Intern = require('../lib/intern');

describe("Intern class", () => {
	it("it should create an object with intern value pairs.", () => {
		const intern = new Intern("seth", 44, "seth@gmail.com", "DU");
		expect(intern).toEqual({
			name: "seth",
			id: 44,
			email: "seth@gmail.com",
			school: "DU",
		})
	})
});