describe('Playing with generators in JS', () => {

    test('A generator that only creates a single value', () => {

        function* singleGenerator() {
            yield "hello world";
        }

        const sut = singleGenerator();

        let {done, value} = sut.next();
        expect(done).toBe(false);
        expect(value).toBe("hello world");

        expect(sut.next()).toStrictEqual({"done": true, "value": undefined});
    })

    test('A generator which yields and then returns', () => {

        function* loggerator() {

            console.log("Running....");

            yield 'paused';

            console.log("running again...")

            return "finished working.";
        }

        const sut = loggerator();

        let {done, value} = sut.next();
        expect(done).toBe(false);
        expect(value).toBe("paused");

        expect(sut.next()).toStrictEqual({"done": true, "value": "finished working."});
    })

    test('Iterating through results of a generator function and converting that iterable to a list', () => {

        function* alphabetGenerator() {
            yield "a";
            yield "g";
            yield "k";
            yield "y";
            yield "i";
            return "o";
        }

        let stringRepresentation = "";
        // @ts-ignore
        for (let letter of alphabetGenerator()) {
            stringRepresentation += letter.toUpperCase();
        }
        expect(stringRepresentation).toBe("AGKYI");

        // @ts-ignore
        expect([...alphabetGenerator()]).toStrictEqual(["a", "g", "k", "y", "i"])
    })

    test('Generate a deck of cards', () => {

        function* cardDeckGenerator() {

            const suits = ["♠️", "❤️", "♣️", "♦️"];
            const courts = ["J", "Q", "K", "A"];

            for (let suit of suits) {
                for (let i = 2; i <= 10; i++) yield suit + i;
                for (let court of courts) yield suit + court;
            }
        }

        let stringRepresentation = "";
        // @ts-ignore
        for (let card of cardDeckGenerator()) {
            stringRepresentation += card.toUpperCase();
        }
        expect(stringRepresentation).toStrictEqual("♠️2♠️3♠️4♠️5♠️6♠️7♠️8♠️9♠️10♠️J♠️Q♠️K♠️A❤️2❤️3❤️4❤️5❤️6❤️7❤️8❤️9❤️10❤️J❤️Q❤️K❤️A♣️2♣️3♣️4♣️5♣️6♣️7♣️8♣️9♣️10♣️J♣️Q♣️K♣️A♦️2♦️3♦️4♦️5♦️6♦️7♦️8♦️9♦️10♦️J♦️Q♦️K♦️A");

    })

});
