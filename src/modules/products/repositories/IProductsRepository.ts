import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../dtos/IUpdateProductDTO";
import { Product } from "../infra/typeorm/entities/Products";

interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<Product>;
    findAll(): Promise<Product[]>;
    deleteById( id : string ): Promise<void>;
    update(data: IUpdateProductDTO): Promise<Product>;
}

export { IProductsRepository }