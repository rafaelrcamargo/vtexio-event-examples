// Simple jest test to sum two numbers
describe('Sum basic numbers', () => {
  it('1 + 1 should be equal 2', () => {
    expect(1 + 1).toBe(2)
  })
})

// Simple jest test to sum two decimals
describe('Sum decimal numbers', () => {
  it('0.1 + 0.2 should not be equal 0.3', () => {
    expect(0.1 + 0.2).not.toBe(0.3)
  })
})