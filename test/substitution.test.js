const { expect } = require("chai");
const {substitution}= require("../src/substitution");

describe("substitution", () => {
  it("should return false if the alphabet isnt 26 letters", () => {
     const actual = substitution("John K", "qjan", encode = true)
     expect(actual).to.be.false
     })
  it("should return the correct massage", () => {
     const actual = substitution("Mcto J", "qweryuitpmjasocdfghklzxvbn", encode = false)
     const expected = "john k"
     expect(actual).to.equal(expected)
     })
  it("should return false is there are duplicate characters", () => {
     const actual = substitution("fjdhf", "aaaaaa", encode = false)
     expect(actual).to.be.false
     })
  it("should maintain spaces after decoding", () => {
    const actual = substitution("Mcto J", "qweryuitpmjasocdfghklzxvbn", encode = false)
    const expected = "john k"
    expect(actual).to.equal(expected)
     })
  it("should maintain spaces after encoding", () => {
    const actual = substitution("John K", "qweryuitpmjasocdfghklzxvbn", encode = true)
    const expected = "mcto j"
    expect(actual).to.equal(expected)
    })
  it("should ignore capital letters", () => {
    const actual = substitution("MCTO J", "qweryuitpmjasocdfghklzxvbn", encode = false)
    const expected = "john k"
    expect(actual).to.equal(expected)
    })
  })
