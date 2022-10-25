const Manager = require('../lib/manager');


describe("Manager class", () => {
	it("it should create an object with manager value pairs.", () => {
		// arrange
		const manager = new Manager("Sean", 33, "sean@gmail.com", "303-555-6666");
		// assert
		expect(manager).toEqual({
			name: "Sean",
			id: 33,
			email: "sean@gmail.com",
			officeNumber: "303-555-6666",
		})
	})
});