import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/typeorm/entities/Products";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {

    private products : Product[] = []; 

    async create({name, description}: ICreateProductDTO): Promise<Product> {
        const product = new Product();
        
        Object.assign(product, {
            name,
            description,
            created_at: new Date()
        });

        this.products.push(product);

        return product;
    }

    async findAll() : Promise<Product[]> {
        return this.products;
    }

    async deleteById(id: string) : Promise<void> {
        this.products = this.products.filter(product => product.id !== id);
    }
    
}

export { ProductsRepositoryInMemory }