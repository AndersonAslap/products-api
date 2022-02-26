import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../../dtos/ICreateProductDTO";
import { Product } from "../entities/Products";
import { IProductsRepository } from "../../../repositories/IProductsRepository";

class ProductsRepository implements IProductsRepository {

    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }
    
    async create({name, description}: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({
            name, 
            description
        });

        await this.repository.save(product);

        return product;
    }

    async findAll() : Promise<Product[]> {
        const products = this.repository.find();
        return products;
    }
    
}

export { ProductsRepository };