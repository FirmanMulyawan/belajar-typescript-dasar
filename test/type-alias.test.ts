import {Category, Product} from "../src/type-alias";

describe('Type Alias',function () {
    it('should support in typescript', function () {
        const category: Category = {
            id: 1,
            name: "Handphone",
        }

        const product: Product = {
            id: "123456",
            name: "Samsung Galaxy S20",
            price: 1000000,
            category: category,
        }

        console.info(product);
        console.info(category);
    })
})