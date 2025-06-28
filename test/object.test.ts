describe('Object', function(){
    it("should support in typescript", function(){
        const person: {id: string, name: string, hobbies?: string[]}={
            id: "123456",
            name: "Firman",
        }

        console.info(person);

        person.id = "123456789";
        console.info(person);
    })
})