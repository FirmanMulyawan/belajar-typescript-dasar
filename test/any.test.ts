describe('Any', function(){
    it('should support in typescript', function(){
       const person:any = {
           id: 1,
           name: "Firman Mulyawan",
           age: 20,
        }

        person.age = 21;
       person.address = "Jakarta";

       console.info(person);
    })
})