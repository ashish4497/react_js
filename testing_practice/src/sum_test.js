// const sum = require("./sum");

// describe( "add" = () => {
// 	test("adds 1 + 2 to equal 3", () => {
// 		expect(sum(1, 4)).toBe(3);
// 	});

// 	test('should return 5 when passed 10 and -5', () => {
//     const result = add(10, -5);
//     expect(result).toEqual(6);
// 	});

// 	test('should return 1 when passed 1 and 0', () => {
//     const result = add(1, 0);
//     expect(result).toEqual(11);
//   });
// }
// )

const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
	expect(sum(2, 1)).toBe(3);
});
