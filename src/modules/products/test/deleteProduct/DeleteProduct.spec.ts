import { Product } from "../../infra/typeorm/entities/Products";
import { productOne, productTwo } from "../../mocks/productMock";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../useCases/createProduct/CreateProductUseCase";
import { DeleteProductUseCase } from "../../useCases/deleteProduct/DeleteProductUseCase";
import { ListProductsUseCase } from "../../useCases/listProducts/ListProductsUseCase";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductUseCase: CreateProductUseCase;
let deleteProductUseCase: DeleteProductUseCase;
let listProductsUseCase: ListProductsUseCase;
let product : Product;

describe("Delete Product Test Unitary", () => {
    beforeEach(async () => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
        deleteProductUseCase = new DeleteProductUseCase(productsRepositoryInMemory);
        listProductsUseCase = new ListProductsUseCase(productsRepositoryInMemory);

        [, product] = await Promise.all([
            createProductUseCase.execute({name: productOne.name, description: productOne.description}),
            createProductUseCase.execute({name: productTwo.name, description: productTwo.description})
        ]);
    });

    it("should be able delete a product", async () => {
        const [, products] = await Promise.all([
            deleteProductUseCase.execute(product.id),
            listProductsUseCase.execute(),
        ]);

        expect(products).toHaveLength(1);
    });
});