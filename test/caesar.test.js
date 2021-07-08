const { expect } = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the value is 0, < -25, > 25, or null", () => {
    const actual = caesar("thinkful")
    const expected = false
    expect(actual).to.equal(expected)
  })
  it("should return a lowercase result", () => {
     const actual = caesar("BPQA qa I amkzmb umaaiom", 8, false)
     const expected = "this is a secret message"
     expect(actual).to.equal(expected)
     })
  it("should wrap the alphabet", () => {
    const actual = caesar("zzzaaa", 8)
    const expected = "hhhiii"
    expect(actual).to.equal(expected)
  })
  it("should maintain other characters besides letters", () => {
    const actual = caesar("#*$&!", 8)
    const expected = "#*$&!"
    expect(actual).to.equal(expected)
  })
})

