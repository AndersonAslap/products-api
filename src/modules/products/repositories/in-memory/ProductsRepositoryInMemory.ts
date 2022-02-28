import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
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

    async update({id, name, description} : IUpdateProductDTO) : Promise<Product> {
        const index = this.products.findIndex(product => product.id === id);

        this.products[index].name = name;
        this.products[index].description = description;

        const product = this.products[index];

        return product;
    }
    
}

export { ProductsRepositoryInMemory }