import calc from '../src'

test('The calculation result should be 998.', () => {
    expect(calc(1024, 28)).toBe(998)
})
