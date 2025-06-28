describe('Union Type', function() {
    it("should support in typescript", function(){
        let sample: boolean |string | number = "firman";
        console.info(sample);
        sample = 1000000;
        console.info(sample);
        sample = true;
        console.info(sample);
    })

    it('should support typeof operator', function(){
        function process(value: string | number | boolean){
            if(typeof value === "string"){
                return value.toUpperCase();
            }else if(typeof value === "number"){
                return value * 2;
            }else{
                return !value;
            }
        }

        expect(process("firman")).toBe("FIRMAN");
        expect(process(1000000)).toBe(2000000);
        expect(process(true)).toBe(false);
    })
})