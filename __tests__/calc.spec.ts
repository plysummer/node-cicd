import calc from '../src'

test('The calculation result should be 1007.', () => {
    expect(calc(1024, 28)).toBe(1007)
})
