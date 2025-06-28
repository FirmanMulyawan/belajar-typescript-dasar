import {Seller} from "../src/interface";
import {Employee, Manager} from "../src/extending-interface";

describe('Interface', function() {
    it('should support in typescript', function() {
        const seller: Seller = {
            id: 1,
            name: "Firman",
            address: "Jakarta",
            nib: "11111",
            npwp: "1111111111111111",
        }

        seller.address = "Bandung";
        // seller.nib = "22222"; error
        console.info(seller);
    })

    // function interface
    // - di typescript, kita juga bisa membuat deklarasi function dalam bentuk interface
    // - dengan demikian ketika kita ingin membuat variable yang berisi function, kita bisa dengan mudah
    // menggunakan interface tersebut
    it("should support function interface", function(){
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2:number): number => {
            return value1 + value2;
        }

        expect(add(2, 2)).toBe(4);
    })

    // indexable interface
    // - interface juga bisa digunakan untuk membuat tipe data dengan jenis yang memiliki index,
    // seperti array dan object
    it("should support indexable interface", function(){
        interface ProductArray {
            [index: number]: string;
        }

        const product: ProductArray = ["Samsung Galaxy S20", "iPhone 12"];

        console.info(product);

        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": "Firman",
            "address": "Jakarta",
        }

        expect(dictionary["name"]).toBe("Firman");
        expect(dictionary["address"]).toBe("Jakarta");
    })

    // extending interface
    it("should support extends interface", function(){
       const employee: Employee ={
           id: "1",
           name: "Firman",
           division: "IT",
       }

       console.log(employee);
       const manager: Manager = {
           id: "2",
           name: "mulyawan",
           division: "IT",
           numberOfEmployees: 10,
       };

       console.info(manager);
    })

    // function di interface
    // - implementasi dari interface di javascript sebenarnya adalah sebuah object
    // - seperti yang kita tahu di javascript kita bisa menambahkan function sebagai attribute
    // di object
    // - hal ini juga bisa kita lakukan di interface

    it("should support function in interface", function(){
        interface Person {
            name: string,
            sayHello(name: string): string,
        }

        const person: Person = {
            name: "Firman",
            sayHello: function(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Budi"));
    })
})