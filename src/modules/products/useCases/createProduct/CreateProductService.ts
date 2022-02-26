import { inject, injectable } from "tsyringe";
import { Product } from "../../infra/typeorm/entities/Products";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateProductService {
    
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository
    ){}
    
    async execute({name, description} : IRequest) : Promise<Product> {
        const product = await this.productsRepository.create({
            name,
            description
        });

        return product;
    }
}

export { CreateProductService };