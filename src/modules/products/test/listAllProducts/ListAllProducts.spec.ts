import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../useCases/createProduct/CreateProductUseCase";

import { productOne, productTwo } from "../../mocks/productMock";
import { ListProductsUseCase } from "../../useCases/listProducts/ListProductsUseCase";


let productsRepositoryInMemory : ProductsRepositoryInMemory;
let createProductUseCase : CreateProductUseCase;
let listProductsUseCase: ListProductsUseCase;

describe("List All Products Test Unitary", () => {

    beforeEach(async () => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
        listProductsUseCase = new ListProductsUseCase(productsRepositoryInMemory);

        await Promise.all([
            createProductUseCase.execute({name: productOne.name, description: productOne.description}),
            createProductUseCase.execute({name: productTwo.name, description: productTwo.description})
        ]);
    });

    it("should be able show all products", async () => {
        const products = await listProductsUseCase.execute();

        expect(products).toHaveLength(2);
    }); 
});