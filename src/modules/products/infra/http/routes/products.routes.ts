import { Router } from "express";
import { CreateProductController } from "../../../useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../../../useCases/deleteProduct/DeleteProductController";
import { ListProductController } from "../../../useCases/listProducts/ListProductsController";
import { UpdateProductController } from "../../../useCases/updateProduct/UpdateProductController";

const productsRouter = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

productsRouter.post("/", createProductController.handle);
productsRouter.get("/", listProductsController.handle);
productsRouter.delete("/", deleteProductController.handle);
productsRouter.put("/", updateProductController.handle);

export { productsRouter };