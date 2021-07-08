const { expect } = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
  it("should return 42 for both i and j", () => {
    const actual = polybius("ij", encode = true)
    const expected = "4242"
    expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () => {
    const actual = polybius("AND", encode = true)
    const expected = "113341"
    expect(actual).to.equal(expected)
  })
  it("should return i/j when decoding 42", () => {
    const actual = polybius("42", encode = false)
    const expected = "i/j"
    expect(actual).to.equal(expected)
  })
  it("should maintains spaces when encode", () => {
    const actual = polybius("yes sir", encode = true)
    const expected = "455134 344224"
    expect(actual).to.equal(expected)
  })
  it("should maintains spaces when decode", () => {
    const actual = polybius("455134 344224", encode = false)
    const expected = "yes si/jr"
    expect(actual).to.equal(expected)
  })
})
