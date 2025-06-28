describe('array', function() {
    it('should same with javascript', function() {
        const names: string[] = ["firman", "mulyawan", "oke"];
        const values: number[] = [1, 2, 3];
        console.info(names);
    })

    it('should support readonly array', function() {
        const hobbies: ReadonlyArray<string> = ["coding", "reading", "traveling"];

        console.info(hobbies);

        // hobbies[0]="eat"; error
    })

    it('should support tuple', function() {
        const person: readonly [string, number] = ["firman", 1000000];
        console.info(person);

        // person[0]="budi"; error
    })
})