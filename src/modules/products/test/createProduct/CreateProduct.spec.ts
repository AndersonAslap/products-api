import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../useCases/createProduct/CreateProductUseCase";
import { productOne } from "../../mocks/productMock"

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductsUseCase: CreateProductUseCase;

describe("Create Product Test Unitary", () => {

    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductsUseCase = new CreateProductUseCase(productsRepositoryInMemory);
    });

    it("Should be able to create a product", async () => {
        const product = await createProductsUseCase.execute({
            name: productOne.name, 
            description: productOne.description
        });

        expect(product).toHaveProperty("id");
    });

});