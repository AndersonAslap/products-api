import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Products";

interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<Product>;
    findAll(): Promise<Product[]>;
    deleteById( id : string ): Promise<void>;
}

export { IProductsRepository }