import { Product } from "../../infra/typeorm/entities/Products";
import { productOne } from "../../mocks/productMock";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../useCases/createProduct/CreateProductUseCase";
import { UpdateProductUseCase } from "../../useCases/updateProduct/UpdateProductUseCase";


let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductUseCase: CreateProductUseCase;
let updateProductUseCase: UpdateProductUseCase;
let product : Product;

describe("Updated Product Test Unitary", () => {

    beforeEach(async () => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
        updateProductUseCase = new UpdateProductUseCase(productsRepositoryInMemory);

        product = await createProductUseCase.execute({
            name: productOne.name,
            description: productOne.description
        });
    });

    it("should be able updated a product", async () => {
        product.name = "Product Updated";
        
        const productUpdated = await updateProductUseCase.execute({
            id: product.id, 
            name: product.name, 
            description: product.description
        });

        expect(productUpdated.name).toBe("Product Updated");
    }) ;
});