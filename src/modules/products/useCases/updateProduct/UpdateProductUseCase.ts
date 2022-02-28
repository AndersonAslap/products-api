import { inject, injectable } from "tsyringe";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
import { Product } from "../../infra/typeorm/entities/Products";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class UpdateProductUseCase {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(data: IUpdateProductDTO) : Promise<Product> {
        const product = await this.productsRepository.update(data);
        return product;
    }
}

export { UpdateProductUseCase }