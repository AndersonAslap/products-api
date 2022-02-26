import { inject, injectable } from "tsyringe";
import { Product } from "../../infra/typeorm/entities/Products";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductsUseCase {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute() : Promise<Product[]> {
        const products = await this.productsRepository.findAll();
        return products;
    }

}

export { ListProductsUseCase }