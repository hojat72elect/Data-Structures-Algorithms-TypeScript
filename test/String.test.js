test('splitting a string into an array; letter by letter', () => {
    const myMotto = "The life is what it is, not what it should be.";
    expect(myMotto.split("").length).toBe(46);
})

test('splitting a string into an array; word by word', () => {
    const myMotto = "The life is what it is, not what it should be.";
    expect(myMotto.split(" ").length).toBe(11);
})
