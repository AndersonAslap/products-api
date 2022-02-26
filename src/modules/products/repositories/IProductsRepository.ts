import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Products";

interface IProductsRepository {
    findAll(): Promise<Product[]>;
    create(data: ICreateProductDTO): Promise<Product>;
}

export { IProductsRepository }