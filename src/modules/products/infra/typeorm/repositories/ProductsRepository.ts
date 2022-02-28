import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../../dtos/ICreateProductDTO";
import { Product } from "../entities/Products";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IUpdateProductDTO } from "../../../dtos/IUpdateProductDTO";

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
        const products = await this.repository.find();
        return products;
    }

    async deleteById(id: string) : Promise<void> {
        await this.repository.delete({ id });
    }
    
    async update({id, name, description} : IUpdateProductDTO) : Promise<Product> {
        const product = await this.repository.findOne({ id });

        product.name = name;
        product.description = description;

        await this.repository.save(product);

        return product;
    }
}

export { ProductsRepository };