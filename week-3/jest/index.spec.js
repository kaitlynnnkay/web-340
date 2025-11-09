// index.spec.js

// testing a custom function
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        throw Error("Inputs must be a number");
    }
    return a + b;
}

test("adds 2 + 2 to equal 4", () => {
    expect(add(2,2)).toBe(4);
})

test("throws an error when a non-number is used", () => {
    expect(() => add("2", 2)).toThrow("Bad input");
    })