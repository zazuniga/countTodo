cons
const {sum, subtract} = require("./firstFile");

desceribe("testing sum the sum method"), () => {
    test("use 1 and 2 as parameters for sum and it will return 3", ()=> {
        expect(sum(1, 2).toBe(3));
    });

    test("use 1 and 2 as parameters for subtract and it will return 1", ()=> {
        expect(subtract(2, 1).toBe(1))
});
}